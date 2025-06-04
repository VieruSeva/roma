
import requests
import sys
import os
from pathlib import Path

class PDFDownloadTester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.download_dir = Path("/tmp/pdf_downloads")
        
        # Create download directory if it doesn't exist
        if not self.download_dir.exists():
            self.download_dir.mkdir(parents=True)

    def run_test(self, name, endpoint, expected_status, expected_content_type=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            response = requests.get(url, stream=True)
            
            # Check status code
            status_success = response.status_code == expected_status
            if not status_success:
                print(f"❌ Failed - Expected status {expected_status}, got {response.status_code}")
                return False
            
            # Check content type if specified
            content_type_success = True
            if expected_content_type:
                actual_content_type = response.headers.get('Content-Type', '')
                content_type_success = expected_content_type in actual_content_type
                if not content_type_success:
                    print(f"❌ Failed - Expected content type containing '{expected_content_type}', got '{actual_content_type}'")
                    return False
            
            # Save the file for verification
            filename = endpoint.split('/')[-1]
            file_path = self.download_dir / filename
            
            with open(file_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            
            # Check if file was downloaded and has content
            file_success = file_path.exists() and file_path.stat().st_size > 0
            if not file_success:
                print(f"❌ Failed - File download failed or file is empty")
                return False
            
            # All checks passed
            self.tests_passed += 1
            print(f"✅ Passed - Status: {response.status_code}, Content-Type: {response.headers.get('Content-Type')}")
            print(f"✅ File downloaded successfully: {file_path} ({file_path.stat().st_size} bytes)")
            return True

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False

def main():
    # Get backend URL from environment or use default
    backend_url = os.environ.get("REACT_APP_BACKEND_URL", "https://3a92c945-d893-424c-9a6a-caf3268c8d80.preview.emergentagent.com")
    
    # Setup tester
    tester = PDFDownloadTester(backend_url)
    
    # Run tests for all three PDF endpoints
    tester.run_test(
        "Oferta Lactate PDF Download",
        "api/download/oferta-lactate-ro.pdf",
        200,
        "application/pdf"
    )
    
    tester.run_test(
        "Industria Băuturilor PDF Download",
        "api/download/industria-bauturilor.pdf",
        200,
        "application/pdf"
    )
    
    tester.run_test(
        "Oferta Carne și Ouă PDF Download",
        "api/download/oferta-carne-si-oua-ro.pdf",
        200,
        "application/pdf"
    )
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
      