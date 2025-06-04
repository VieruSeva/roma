import requests
import sys
import os

class PartnersPDFTester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, method, endpoint, expected_status, expected_content_type=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, stream=True)
            else:
                raise ValueError(f"Unsupported method: {method}")

            status_success = response.status_code == expected_status
            
            if status_success:
                print(f"✅ Status check passed: {response.status_code}")
                
                # Check content type if specified
                if expected_content_type:
                    content_type = response.headers.get('Content-Type', '')
                    if expected_content_type in content_type:
                        print(f"✅ Content-Type check passed: {content_type}")
                    else:
                        print(f"❌ Content-Type check failed: Expected {expected_content_type}, got {content_type}")
                        status_success = False
                
                # Check if the response has content
                content_length = int(response.headers.get('Content-Length', 0))
                if content_length > 0:
                    print(f"✅ Content-Length check passed: {content_length} bytes")
                else:
                    print("❌ Content-Length check failed: No content received")
                    status_success = False
                
                if status_success:
                    self.tests_passed += 1
                    return True
                return False
            else:
                print(f"❌ Status check failed: Expected {expected_status}, got {response.status_code}")
                return False

        except Exception as e:
            print(f"❌ Test failed with error: {str(e)}")
            return False

    def test_pdf_downloads(self):
        """Test all PDF download endpoints"""
        results = []
        
        # Test Industria Băuturilor PDF
        results.append(self.run_test(
            "Industria Băuturilor PDF Download",
            "GET",
            "api/download/industria-bauturilor.pdf",
            200,
            "application/pdf"
        ))
        
        # Test Ofertă Lactate RO PDF
        results.append(self.run_test(
            "Ofertă Lactate RO PDF Download",
            "GET",
            "api/download/oferta-lactate-ro.pdf",
            200,
            "application/pdf"
        ))
        
        # Test Ofertă Carne și Ouă RO PDF
        results.append(self.run_test(
            "Ofertă Carne și Ouă RO PDF Download",
            "GET",
            "api/download/oferta-carne-si-oua-ro.pdf",
            200,
            "application/pdf"
        ))
        
        return all(results)

def main():
    # Get the backend URL from environment or use the provided one
    backend_url = "https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com"
    
    print(f"🚀 Testing Partners PDF Download APIs at {backend_url}")
    
    # Setup tester
    tester = PartnersPDFTester(backend_url)
    
    # Run tests
    pdf_success = tester.test_pdf_downloads()
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if pdf_success:
        print("\n✅ All PDF download endpoints are working correctly!")
    else:
        print("\n❌ Some PDF download endpoints have issues that need to be fixed.")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())