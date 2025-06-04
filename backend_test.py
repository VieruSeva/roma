
import requests
import sys
import json

class NewsImageTester:
    def __init__(self, base_url):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0

    def run_test(self, name, endpoint, method="GET", data=None, expected_status=200):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}
        
        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == "GET":
                response = requests.get(url, headers=headers)
            elif method == "POST":
                response = requests.post(url, json=data, headers=headers)
            
            if response.status_code != expected_status:
                print(f"❌ Failed - Expected status {expected_status}, got {response.status_code}")
                return False, None
            
            self.tests_passed += 1
            print(f"✅ Passed - Status: {response.status_code}")
            
            try:
                return True, response.json()
            except:
                return True, response.text
                
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, None

    def test_fetch_news_image(self, url):
        """Test the fetch-news-image endpoint with a specific URL"""
        success, response = self.run_test(
            f"Fetch image for URL: {url}",
            "api/fetch-news-image",
            method="POST",
            data={"url": url},
            expected_status=200
        )
        
        if success:
            print(f"Response: {json.dumps(response, indent=2)}")
            return response
        return None

    def test_fetch_multiple_news_images(self, urls):
        """Test the fetch-multiple-news-images endpoint with a list of URLs"""
        success, response = self.run_test(
            f"Fetch multiple images",
            "api/fetch-multiple-news-images",
            method="POST",
            data=urls,
            expected_status=200
        )
        
        if success:
            print(f"Response: {json.dumps(response, indent=2)}")
            return response
        return None

    def test_news_ticker(self):
        """Test the news-ticker endpoint"""
        success, response = self.run_test(
            "Get news ticker items",
            "api/news-ticker",
            method="GET",
            expected_status=200
        )
        
        if success:
            print(f"Total items: {response.get('total', 0)}")
            return response
        return None

def main():
    # Get backend URL from environment
    backend_url = "https://7b55f144-6c42-48c8-86a9-86665a93d246.preview.emergentagent.com"
    
    print(f"Testing backend at: {backend_url}")
    tester = NewsImageTester(backend_url)
    
    # Test 1: Test the specific MDED URL that should use the professional image
    mded_url = "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/"
    print("\n=== Testing specific MDED URL with ajutor-de-stat-regional-pentru-investitii ===")
    mded_result = tester.test_fetch_news_image(mded_url)
    
    if mded_result:
        image_url = mded_result.get("image_url")
        expected_image = "https://images.unsplash.com/photo-1551295022-de5522c94e08"
        
        if image_url == expected_image:
            print(f"✅ SUCCESS: Image URL matches expected professional image: {image_url}")
        else:
            print(f"❌ FAILURE: Image URL does not match expected. Got: {image_url}")
            print(f"   Expected: {expected_image}")
    
    # Test 2: Test the news ticker to verify the MDED news item is included
    print("\n=== Testing news ticker to verify MDED news item ===")
    ticker_result = tester.test_news_ticker()
    
    if ticker_result and ticker_result.get("success"):
        items = ticker_result.get("items", [])
        mded_items = [item for item in items if "ajutor-de-stat-regional-pentru-investitii" in item.get("url", "")]
        
        if mded_items:
            print(f"✅ SUCCESS: Found MDED news item in ticker: {mded_items[0]['title']}")
        else:
            print("❌ FAILURE: Could not find MDED news item in ticker")
    
    # Test 3: Test multiple news images to verify batch processing
    print("\n=== Testing multiple news images including MDED URL ===")
    urls = [
        "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
        "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/"
    ]
    
    multiple_results = tester.test_fetch_multiple_news_images(urls)
    
    if multiple_results:
        for result in multiple_results:
            if "ajutor-de-stat-regional-pentru-investitii" in result.get("url", ""):
                image_url = result.get("image_url")
                expected_image = "https://images.unsplash.com/photo-1551295022-de5522c94e08"
                
                if image_url == expected_image:
                    print(f"✅ SUCCESS: Multiple images - MDED image URL matches expected: {image_url}")
                else:
                    print(f"❌ FAILURE: Multiple images - MDED image URL does not match expected. Got: {image_url}")
                    print(f"   Expected: {expected_image}")
    
    # Print summary
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
