import requests
import unittest
import json
import os
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class ANIMPAPITest(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(ANIMPAPITest, self).__init__(*args, **kwargs)
        # Get the backend URL from environment variable or use a default
        self.base_url = os.environ.get('REACT_APP_BACKEND_URL', 'https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com')
        logger.info(f"Using backend URL: {self.base_url}")

    def test_api_root(self):
        """Test the API root endpoint"""
        url = f"{self.base_url}/api"
        logger.info(f"Testing endpoint: {url}")
        
        response = requests.get(url)
        
        # Check if the request was successful
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        logger.info("API root endpoint test passed")

    def test_news_ticker_endpoint(self):
        """Test the /api/news-ticker endpoint that provides news and events data"""
        url = f"{self.base_url}/api/news-ticker"
        logger.info(f"Testing endpoint: {url}")
        
        response = requests.get(url)
        
        # Check if the request was successful
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        
        # Parse the response JSON
        data = response.json()
        
        # Check if the response has the expected structure
        self.assertIn('success', data, "Response should contain 'success' field")
        self.assertIn('items', data, "Response should contain 'items' field")
        self.assertIn('total', data, "Response should contain 'total' field")
        
        # Check if the success field is True
        self.assertTrue(data['success'], "The 'success' field should be True")
        
        # Check if there are items in the response
        self.assertGreater(len(data['items']), 0, "The 'items' array should not be empty")
        
        # Check if the total field matches the number of items
        self.assertEqual(data['total'], len(data['items']), "The 'total' field should match the number of items")
        
        # Check for duplicate ENERGY TRANSITION AGENDA events
        energy_events = [item for item in data['items'] 
                        if item.get('type') == 'event' and 'ENERGY TRANSITION AGENDA' in item.get('title', '')]
        
        self.assertEqual(len(energy_events), 1, 
                        f"There should be exactly 1 ENERGY TRANSITION AGENDA event, found {len(energy_events)}")
        
        if energy_events:
            energy_event = energy_events[0]
            self.assertEqual(energy_event.get('id'), 106, 
                            f"The ENERGY TRANSITION AGENDA event should have ID 106, got {energy_event.get('id')}")
            
            logger.info("Found ENERGY TRANSITION AGENDA event with properties:")
            logger.info(f"  - ID: {energy_event.get('id')}")
            logger.info(f"  - Title: {energy_event.get('title')}")
            logger.info(f"  - Image: {energy_event.get('image')}")
            logger.info(f"  - Video: {energy_event.get('video')}")
            logger.info(f"  - hasVideo: {energy_event.get('hasVideo')}")
        
        # Check total number of events
        events = [item for item in data['items'] if item.get('type') == 'event']
        self.assertEqual(len(events), 5, f"There should be exactly 5 events, found {len(events)}")
        
        # Check total number of news items
        news = [item for item in data['items'] if item.get('type') == 'news']
        self.assertEqual(len(news), 6, f"There should be exactly 6 news items, found {len(news)}")
        
        logger.info("News ticker endpoint test passed")

    def test_status_endpoint(self):
        """Test the /api/status endpoint"""
        url = f"{self.base_url}/api/status"
        logger.info(f"Testing endpoint: {url}")
        
        response = requests.get(url)
        
        # Check if the request was successful
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        
        # Parse the response JSON
        data = response.json()
        
        # Check if the response is a list
        self.assertIsInstance(data, list, "Response should be a list")
        
        logger.info("Status endpoint test passed")

    def test_fetch_news_image_endpoint(self):
        """Test the /api/fetch-news-image endpoint"""
        url = f"{self.base_url}/api/fetch-news-image"
        logger.info(f"Testing endpoint: {url}")
        
        test_url = "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic"
        payload = {"url": test_url}
        
        response = requests.post(url, json=payload)
        
        # Check if the request was successful
        self.assertEqual(response.status_code, 200, f"Expected status code 200, got {response.status_code}")
        
        # Parse the response JSON
        data = response.json()
        
        # Check if the response has the expected structure
        self.assertIn('url', data, "Response should contain 'url' field")
        self.assertEqual(data['url'], test_url, f"The 'url' field should match the request URL")
        
        # Either image_url or error should be present
        self.assertTrue('image_url' in data or 'error' in data, 
                        "Response should contain either 'image_url' or 'error' field")
        
        logger.info("Fetch news image endpoint test passed")

if __name__ == '__main__':
    unittest.main()