import requests
import sys
import os
from datetime import datetime

class ANIMPMinisterDocumentsTester:
    def __init__(self, base_url="https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None, check_content=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)

            success = response.status_code == expected_status
            
            if success:
                print(f"✅ Status: {response.status_code}")
                
                # If we need to check content
                if check_content and response.status_code == 200:
                    content_check = check_content(response)
                    if content_check:
                        self.tests_passed += 1
                        print(f"✅ Content check passed")
                        return True, response
                    else:
                        print(f"❌ Content check failed")
                        return False, response
                else:
                    self.tests_passed += 1
                    return True, response
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                return False, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_document_endpoints(self):
        """Test all document download endpoints"""
        documents = [
            {"name": "minist1.pdf", "endpoint": "download/minist1.pdf"},
            {"name": "minist2.pdf", "endpoint": "download/minist2.pdf"},
            {"name": "minist3.docx", "endpoint": "download/minist3.docx"},
            {"name": "minist4.pdf", "endpoint": "download/minist4.pdf"}
        ]
        
        results = []
        for doc in documents:
            print(f"\nTesting document download: {doc['name']}")
            success, response = self.run_test(
                f"Download {doc['name']}",
                "GET",
                doc['endpoint'],
                200
            )
            
            if success:
                # Check content type
                content_type = response.headers.get('Content-Type')
                if doc['name'].endswith('.pdf') and 'application/pdf' in content_type:
                    print(f"✅ Content-Type is correct: {content_type}")
                elif doc['name'].endswith('.docx') and 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' in content_type:
                    print(f"✅ Content-Type is correct: {content_type}")
                else:
                    print(f"❌ Content-Type is incorrect: {content_type}")
                    success = False
                
                # Check content length
                content_length = int(response.headers.get('Content-Length', 0))
                if content_length > 0:
                    print(f"✅ Content-Length is valid: {content_length} bytes")
                else:
                    print(f"❌ Content-Length is invalid: {content_length}")
                    success = False
            
            results.append({
                "document": doc['name'],
                "success": success,
                "status_code": response.status_code if response else None,
                "content_type": response.headers.get('Content-Type') if response else None,
                "content_length": response.headers.get('Content-Length') if response else None
            })
        
        return results

    def test_news_ticker(self):
        """Test the news ticker API"""
        print("\nTesting news ticker API")
        success, response = self.run_test(
            "News Ticker API",
            "GET",
            "news-ticker",
            200,
            check_content=lambda r: self._check_news_ticker_content(r)
        )
        
        return {
            "success": success,
            "status_code": response.status_code if response else None,
            "items_count": len(response.json()['items']) if response and response.status_code == 200 else 0
        }
    
    def _check_news_ticker_content(self, response):
        """Check if the news ticker response contains the expected content"""
        try:
            data = response.json()
            
            # Check if the response has the expected structure
            if not all(key in data for key in ['success', 'items', 'total']):
                print("❌ News ticker response missing required fields")
                return False
            
            # Check if there are items
            if len(data['items']) == 0:
                print("❌ News ticker has no items")
                return False
            
            # Check if the new news item is present
            new_news_item = next((item for item in data['items'] 
                                if item.get('title') == "Ministerul Agriculturii vine cu o reacție în urma demersului scris de ANIPM"), None)
            
            if not new_news_item:
                print("❌ New news item not found in news ticker")
                return False
            
            # Check if the new news item has the correct properties
            if not new_news_item.get('hasDocuments'):
                print("❌ New news item doesn't have hasDocuments flag")
                return False
            
            if new_news_item.get('category') != "official":
                print(f"❌ New news item has incorrect category: {new_news_item.get('category')}")
                return False
            
            print(f"✅ Found new news item in ticker with correct properties")
            return True
            
        except Exception as e:
            print(f"❌ Error checking news ticker content: {str(e)}")
            return False

def main():
    # Get backend URL from environment or use default
    backend_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com')
    
    print(f"Testing ANIMP API at: {backend_url}")
    tester = ANIMPMinisterDocumentsTester(backend_url)
    
    # Test document endpoints
    print("\n=== Testing Document Endpoints ===")
    document_results = tester.test_document_endpoints()
    
    # Test news ticker API
    print("\n=== Testing News Ticker API ===")
    news_ticker_result = tester.test_news_ticker()
    
    # Print summary
    print("\n=== Test Summary ===")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    # Document endpoints summary
    print("\nDocument Endpoints:")
    for result in document_results:
        status = "✅ PASSED" if result['success'] else "❌ FAILED"
        print(f"{status} - {result['document']}")
    
    # News ticker summary
    news_ticker_status = "✅ PASSED" if news_ticker_result['success'] else "❌ FAILED"
    print(f"\nNews Ticker API: {news_ticker_status}")
    if news_ticker_result['success']:
        print(f"Found {news_ticker_result['items_count']} items in the news ticker")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())