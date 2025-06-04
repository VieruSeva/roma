import requests
import sys
import logging
from datetime import datetime

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class EventsAPITester:
    def __init__(self, base_url="https://3a92c945-d893-424c-9a6a-caf3268c8d80.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        logger.info(f"Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            else:
                logger.error(f"Unsupported method: {method}")
                return False, None

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                logger.info(f"✅ Passed - Status: {response.status_code}")
                return True, response
            else:
                logger.error(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                return False, response

        except Exception as e:
            logger.error(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "api",
            200
        )

    def test_status_endpoint(self):
        """Test status endpoint"""
        return self.run_test(
            "Status Endpoint",
            "GET",
            "api/status",
            200
        )

def main():
    # Setup
    tester = EventsAPITester()
    logger.info(f"Testing backend API at: {tester.base_url}")
    
    # Run tests
    root_success, root_response = tester.test_api_root()
    status_success, status_response = tester.test_status_endpoint()
    
    # Print results
    logger.info(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.tests_passed == tester.tests_run:
        logger.info("All tests passed!")
        return 0
    else:
        logger.error("Some tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())