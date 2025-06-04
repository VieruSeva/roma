
import requests
import sys
import os

class PartnersPDFTester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, endpoint, expected_status=200, expected_content_type="application/pdf"):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            response = requests.get(url, stream=True)
            
            # Check status code
            status_success = response.status_code == expected_status
            if status_success:
                print(f"✅ Status Code: {response.status_code}")
            else:
                print(f"❌ Status Code: Expected {expected_status}, got {response.status_code}")
                return False
            
            # Check content type
            content_type = response.headers.get('Content-Type', '')
            content_type_success = expected_content_type in content_type
            if content_type_success:
                print(f"✅ Content-Type: {content_type}")
            else:
                print(f"❌ Content-Type: Expected {expected_content_type}, got {content_type}")
                return False
            
            # Check if there's content
            content_length = int(response.headers.get('Content-Length', 0))
            if content_length > 0:
                print(f"✅ Content-Length: {content_length} bytes")
            else:
                print("❌ Content-Length: No content received")
                return False
            
            self.tests_passed += 1
            return True
            
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

def main():
    # Get backend URL from environment or use default
    backend_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com')
    
    print(f"Testing against backend URL: {backend_url}")
    
    # Setup tester
    tester = PartnersPDFTester(backend_url)
    
    # Test PDF downloads
    tester.run_test(
        "Industria Băuturilor PDF",
        "api/download/industria-bauturilor.pdf"
    )
    
    tester.run_test(
        "Ofertă Lactate RO PDF",
        "api/download/oferta-lactate-ro.pdf"
    )
    
    tester.run_test(
        "Ofertă Carne și Ouă RO PDF",
        "api/download/oferta-carne-si-oua-ro.pdf"
    )
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
