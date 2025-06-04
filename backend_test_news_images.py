
import requests
import sys
import json
from datetime import datetime

class NewsImageAPITester:
    def __init__(self, base_url="https://3a92c945-d893-424c-9a6a-caf3268c8d80.preview.emergentagent.com"):
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
                return success, response.json() if response.content else {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text[:200]}...")
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            return False, {}

    def test_fetch_single_news_image(self, url):
        """Test fetching a single news image"""
        success, response = self.run_test(
            f"Fetch image for {url}",
            "POST",
            "api/fetch-news-image",
            200,
            data={"url": url}
        )
        
        if success:
            if response.get('image_url'):
                print(f"✅ Image URL found: {response['image_url'][:60]}...")
                return True
            else:
                print(f"❌ No image URL in response: {json.dumps(response)[:200]}...")
                return False
        return False

    def test_fetch_multiple_news_images(self, urls):
        """Test fetching multiple news images"""
        success, response = self.run_test(
            "Fetch multiple news images",
            "POST",
            "api/fetch-multiple-news-images",
            200,
            data=urls
        )
        
        if success:
            print(f"✅ Received response for {len(response)} URLs")
            
            # Check each URL result
            for i, result in enumerate(response):
                if result.get('image_url'):
                    print(f"  ✅ URL {i+1}: Image found - {result['image_url'][:60]}...")
                else:
                    print(f"  ❌ URL {i+1}: No image found - {result.get('error', 'No error message')}")
            
            # Count how many URLs have images
            images_found = sum(1 for r in response if r.get('image_url'))
            print(f"\n✅ Found images for {images_found} out of {len(urls)} URLs")
            
            return images_found > 0
        return False

def main():
    # Setup
    tester = NewsImageAPITester()
    
    # Test URLs
    test_urls = [
        "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic",
        "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/",
        "https://stiri.md/article/economic/in-transnistria-se-vor-scumpi-faina-si-painea/",
        "https://stiri.md/article/economic/ion-perju-preturile-s-au-majorat-nejustificat-grau-in-tara-este/",
        "https://agora.md/2025/02/21/cel-mai-mare-producator-din-industria-de-panificatie-din-moldova-inregistreaza-un-profit-record",
        "https://moldova.europalibera.org/a/27188328.html"
    ]
    
    # Run tests
    print("\n🧪 Testing single news image API...")
    single_test_result = tester.test_fetch_single_news_image(test_urls[0])
    
    print("\n🧪 Testing multiple news images API...")
    multiple_test_result = tester.test_fetch_multiple_news_images(test_urls)
    
    # Print results
    print(f"\n📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if single_test_result and multiple_test_result:
        print("\n✅ API is working correctly for fetching news images!")
        return 0
    else:
        print("\n❌ API has issues with fetching news images.")
        return 1

if __name__ == "__main__":
    sys.exit(main())
