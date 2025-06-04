import requests
import sys
from datetime import datetime

class NewsAPITester:
    def __init__(self, base_url="https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
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
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                if response.text:
                    try:
                        print(f"Response: {response.json()}")
                    except:
                        print(f"Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                if response.text:
                    try:
                        print(f"Error: {response.json()}")
                    except:
                        print(f"Error: {response.text[:200]}...")

            return success, response

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_get_news(self):
        """Test getting all news items"""
        success, response = self.run_test(
            "Get All News",
            "GET",
            "news",
            200
        )
        return success

    def test_get_news_item(self, news_id):
        """Test getting a specific news item"""
        success, response = self.run_test(
            f"Get News Item {news_id}",
            "GET",
            f"news/{news_id}",
            200
        )
        return success

def main():
    print("\n===== TESTING NEWS API ENDPOINTS =====\n")
    
    # Setup
    tester = NewsAPITester()
    
    # Run tests
    tester.test_get_news()
    tester.test_get_news_item(8)  # Test the specific news item we're looking for
    
    # Print results
    print(f"\n📊 News API Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())