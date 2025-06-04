from fastapi import FastAPI, APIRouter, Request, HTTPException, status
from fastapi.responses import HTMLResponse, RedirectResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime
import aiohttp
import asyncio
from bs4 import BeautifulSoup
import re


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="ANIMP API", version="1.0.0")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class NewsImageRequest(BaseModel):
    url: str

class NewsImageResponse(BaseModel):
    url: str
    image_url: Optional[str] = None
    title: Optional[str] = None
    description: Optional[str] = None
    error: Optional[str] = None

# Image extraction functions
async def extract_image_from_url(url: str) -> dict:
    """Extract image, title, and description from a news URL using Open Graph tags"""
    try:
        # Special handling for agora.md bakery article that doesn't have images
        if "agora.md" in url and "cel-mai-mare-producator-din-industria-de-panificatie" in url:
            return {
                "image_url": "https://images.pexels.com/photos/6291408/pexels-photo-6291408.jpeg",
                "title": "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record",
                "description": "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record pentru 2024"
            }
        
        # Special handling for MDED.gov.md - replace Facebook image with professional image
        if "mded.gov.md" in url and "ajutor-de-stat-regional-pentru-investitii" in url:
            return {
                "image_url": "https://images.unsplash.com/photo-1551295022-de5522c94e08",
                "title": "Schema de ajutor de stat regional pentru investiții",
                "description": "Citește despre programul de ajutor de stat pentru investiții regionale pe site-ul oficial al MDED."
            }
        
        async with aiohttp.ClientSession() as session:
            async with session.get(url, timeout=aiohttp.ClientTimeout(total=10)) as response:
                if response.status != 200:
                    return {"error": f"HTTP {response.status}"}
                
                html = await response.text()
                soup = BeautifulSoup(html, 'html.parser')
                
                # Try to get Open Graph image first (most reliable)
                og_image = soup.find('meta', property='og:image')
                if og_image and og_image.get('content'):
                    image_url = og_image['content']
                    # Make sure it's an absolute URL
                    if image_url.startswith('//'):
                        image_url = 'https:' + image_url
                    elif image_url.startswith('/'):
                        from urllib.parse import urljoin
                        image_url = urljoin(url, image_url)
                else:
                    # Fallback: look for the first large image in article
                    images = soup.find_all('img', src=True)
                    image_url = None
                    for img in images:
                        src = img.get('src')
                        if src and not any(skip in src.lower() for skip in ['logo', 'icon', 'avatar', 'ad']):
                            if src.startswith('//'):
                                src = 'https:' + src
                            elif src.startswith('/'):
                                from urllib.parse import urljoin
                                src = urljoin(url, src)
                            image_url = src
                            break
                
                # Get title
                og_title = soup.find('meta', property='og:title')
                title = og_title['content'] if og_title and og_title.get('content') else None
                if not title:
                    title_tag = soup.find('title')
                    title = title_tag.text.strip() if title_tag else None
                
                # Get description
                og_desc = soup.find('meta', property='og:description')
                description = og_desc['content'] if og_desc and og_desc.get('content') else None
                if not description:
                    meta_desc = soup.find('meta', attrs={'name': 'description'})
                    description = meta_desc['content'] if meta_desc and meta_desc.get('content') else None
                
                return {
                    "image_url": image_url,
                    "title": title,
                    "description": description
                }
    except Exception as e:
        return {"error": str(e)}

# Add your routes to the router instead of directly to app
@api_router.get("/", response_class=HTMLResponse)
async def root():
    preview_url = os.environ.get("preview_endpoint", "https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com")
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>API and Preview Links</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }}
            h1, h2 {{
                color: #4a5568;
            }}
            h1 {{
                border-bottom: 2px solid #edf2f7;
                padding-bottom: 10px;
            }}
            .section {{
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }}
            .link {{
                display: block;
                margin: 10px 0;
                padding: 8px 16px;
                background-color: #e2e8f0;
                border-radius: 4px;
                text-decoration: none;
                color: #4a5568;
            }}
            .link:hover {{
                background-color: #cbd5e0;
            }}
            .updated-link {{
                background-color: #c6f6d5;
                font-weight: bold;
                color: #2c7a7b;
            }}
            .updated-link:hover {{
                background-color: #9ae6b4;
            }}
            .description {{
                margin-top: 5px;
                font-size: 14px;
                color: #718096;
            }}
        </style>
    </head>
    <body>
        <h1>API and Preview Links</h1>
        
        <div class="section">
            <h2>Updated Site Links</h2>
            <a href="{preview_url}" class="link updated-link" target="_blank">
                Updated Site Preview
                <div class="description">Direct link to your updated site with the cursor fix</div>
            </a>
            
            <a href="/api/links" class="link updated-link" target="_blank">
                /api/links
                <div class="description">A page showing all available preview links and details</div>
            </a>
        </div>
        
        <div class="section">
            <h2>API Endpoints</h2>
            <a href="/api/demo" class="link" target="_blank">
                /api/demo
                <div class="description">Interactive demo of the API functionality</div>
            </a>
            
            <a href="/api/preview" class="link" target="_blank">
                /api/preview
                <div class="description">Page that redirects to your updated site</div>
            </a>
            
            <a href="/api/new-preview" class="link" target="_blank">
                /api/new-preview
                <div class="description">Direct redirect to your updated site</div>
            </a>
            
            <a href="/api/status" class="link" target="_blank">
                /api/status
                <div class="description">API endpoint for retrieving status checks</div>
            </a>
        </div>
    </body>
    </html>
    """
    return html_content

@api_router.get("/preview", response_class=HTMLResponse)
async def preview_redirect():
    preview_url = os.environ.get("preview_endpoint", "https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com")
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Updated Site Preview</title>
        <meta http-equiv="refresh" content="0; url={preview_url}" />
        <style>
            body {{
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                text-align: center;
                line-height: 1.6;
            }}
            h1 {{
                color: #4a5568;
                margin-bottom: 20px;
            }}
            .container {{
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 30px;
                margin: 40px 0;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }}
            .link {{
                display: inline-block;
                background-color: #4299e1;
                color: white;
                padding: 12px 24px;
                border-radius: 4px;
                text-decoration: none;
                margin-top: 20px;
                font-weight: bold;
                transition: background-color 0.3s ease;
            }}
            .link:hover {{
                background-color: #3182ce;
            }}
            .message {{
                font-size: 18px;
                margin: 20px 0;
            }}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Your Updated Site Preview</h1>
            <p class="message">You're being redirected to the updated preview of your site.</p>
            <p>If you're not redirected automatically, click the link below:</p>
            <a class="link" href="{preview_url}">Go to Updated Site</a>
        </div>
        <script>
            // Redirect to the preview URL
            window.location.href = "{preview_url}";
        </script>
    </body>
    </html>
    """
    return html_content

@api_router.get("/links", response_class=HTMLResponse)
async def site_links():
    preview_url = os.environ.get("preview_endpoint", "https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com")
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Site Preview Links</title>
        <style>
            body {{
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }}
            h1 {{
                color: #4a5568;
                border-bottom: 2px solid #edf2f7;
                padding-bottom: 10px;
            }}
            .link-section {{
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }}
            .button {{
                display: inline-block;
                background-color: #4299e1;
                color: white;
                padding: 10px 20px;
                border-radius: 4px;
                text-decoration: none;
                margin: 10px 0;
                font-weight: bold;
            }}
            .button:hover {{
                background-color: #3182ce;
            }}
            .updated {{
                background-color: #48bb78;
            }}
            .updated:hover {{
                background-color: #38a169;
            }}
            .code {{
                background-color: #edf2f7;
                padding: 2px 4px;
                border-radius: 4px;
                font-family: monospace;
            }}
        </style>
    </head>
    <body>
        <h1>Your Site Preview Links</h1>
        
        <div class="link-section">
            <h2>Updated Site Preview</h2>
            <p>This is the direct link to your updated site with the cursor fix applied:</p>
            <a class="button updated" href="{preview_url}" target="_blank">Open Updated Site</a>
            <p>URL: <code class="code">{preview_url}</code></p>
        </div>
        
        <div class="link-section">
            <h2>Original Preview Link</h2>
            <p>For reference, this was the original link you provided:</p>
            <a class="button" href="https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com/" target="_blank">Open Original Site</a>
            <p>URL: <code class="code">https://788df864-63c2-40c6-a323-e78062f3bccf.preview.emergentagent.com/</code></p>
        </div>
        
        <div class="link-section">
            <h2>Additional Endpoints</h2>
            <p>We've also created the following endpoints for your convenience:</p>
            <ul>
                <li><a href="/api/demo" target="_blank">/api/demo</a> - Interactive API demo page</li>
                <li><a href="/api/preview" target="_blank">/api/preview</a> - Redirect to your updated site</li>
                <li><a href="/api/new-preview" target="_blank">/api/new-preview</a> - Direct redirect to your updated site</li>
            </ul>
        </div>
    </body>
    </html>
    """
    return html_content

@api_router.get("/demo", response_class=HTMLResponse)
async def demo():
    html_content = """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Live Demo</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                max-width: 800px;
                margin: 0 auto;
                padding: 20px;
                line-height: 1.6;
            }
            h1 {
                color: #4a5568;
                border-bottom: 2px solid #edf2f7;
                padding-bottom: 10px;
            }
            .demo-section {
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }
            .button {
                display: inline-block;
                background-color: #4299e1;
                color: white;
                padding: 8px 16px;
                border-radius: 4px;
                text-decoration: none;
                margin-top: 10px;
                cursor: pointer;
            }
            .button:hover {
                background-color: #3182ce;
            }
            code {
                background-color: #edf2f7;
                padding: 2px 4px;
                border-radius: 4px;
                font-family: monospace;
            }
        </style>
    </head>
    <body>
        <h1>Backend Live Demo</h1>
        
        <div class="demo-section">
            <h2>API Endpoints</h2>
            <p>This backend provides the following API endpoints:</p>
            <ul>
                <li><code>GET /api</code> - Returns a "Hello World" message</li>
                <li><code>POST /api/status</code> - Create a new status check</li>
                <li><code>GET /api/status</code> - Get all status checks</li>
                <li><code>GET /api/demo</code> - This demo page</li>
            </ul>
        </div>
        
        <div class="demo-section">
            <h2>Create Status Check</h2>
            <p>Try creating a status check by clicking the button below:</p>
            <button class="button" onclick="createStatus()">Create Status Check</button>
            <div id="create-result"></div>
        </div>
        
        <div class="demo-section">
            <h2>Get Status Checks</h2>
            <p>Try retrieving all status checks by clicking the button below:</p>
            <button class="button" onclick="getStatuses()">Get Status Checks</button>
            <div id="get-result"></div>
        </div>
        
        <script>
            async function createStatus() {
                try {
                    const response = await fetch('/api/status', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            client_name: 'Demo User ' + new Date().toISOString()
                        }),
                    });
                    
                    const data = await response.json();
                    document.getElementById('create-result').innerHTML = 
                        '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
                } catch (error) {
                    document.getElementById('create-result').innerHTML = 
                        '<p style="color: red;">Error: ' + error.message + '</p>';
                }
            }
            
            async function getStatuses() {
                try {
                    const response = await fetch('/api/status');
                    const data = await response.json();
                    document.getElementById('get-result').innerHTML = 
                        '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
                } catch (error) {
                    document.getElementById('get-result').innerHTML = 
                        '<p style="color: red;">Error: ' + error.message + '</p>';
                }
            }
        </script>
    </body>
    </html>
    """
    return html_content

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.get("/status/{status_id}")
async def get_status(status_id: str):
    try:
        status = await db["status_checks"].find_one({"id": status_id})
        if status:
            # Convert ObjectId to string for JSON serialization
            status["_id"] = str(status["_id"])
            return status
        else:
            raise HTTPException(status_code=404, detail="Status not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.post("/fetch-news-image", response_model=NewsImageResponse)
async def fetch_news_image(request: NewsImageRequest):
    """Fetch image and metadata from a news URL"""
    try:
        result = await extract_image_from_url(request.url)
        return NewsImageResponse(
            url=request.url,
            image_url=result.get("image_url"),
            title=result.get("title"),
            description=result.get("description"),
            error=result.get("error")
        )
    except Exception as e:
        return NewsImageResponse(
            url=request.url,
            error=str(e)
        )

@api_router.post("/fetch-multiple-news-images")
async def fetch_multiple_news_images(urls: List[str]):
    """Fetch images and metadata from multiple news URLs"""
    try:
        tasks = [extract_image_from_url(url) for url in urls]
        results = await asyncio.gather(*tasks, return_exceptions=True)
        
        response = []
        for i, result in enumerate(results):
            if isinstance(result, Exception):
                response.append({
                    "url": urls[i],
                    "error": str(result)
                })
            else:
                response.append({
                    "url": urls[i],
                    "image_url": result.get("image_url"),
                    "title": result.get("title"),
                    "description": result.get("description"),
                    "error": result.get("error")
                })
        
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/download/industria-bauturilor.pdf")
async def download_industria_bauturilor():
    """Open Industria Băuturilor PDF in browser"""
    file_path = Path("/app/frontend/public/industria-bauturilor.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/download/oferta-lactate-ro.pdf")
async def download_oferta_lactate():
    """Open Oferta Lactate RO PDF in browser"""
    file_path = Path("/app/frontend/public/oferta-lactate-ro.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/download/oferta-carne-si-oua-ro.pdf")
async def download_oferta_carne():
    """Open Oferta Carne și Ouă RO PDF in browser"""
    file_path = Path("/app/frontend/public/oferta-carne-si-oua-ro.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

# Minister Documents Endpoints
@api_router.get("/download/minist1.pdf")
async def download_minist1():
    """Open Minist1 PDF in browser"""
    file_path = Path("/app/frontend/src/documents/minist1.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/download/minist2.pdf")
async def download_minist2():
    """Open Minist2 PDF in browser"""
    file_path = Path("/app/frontend/src/documents/minist2.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/download/minist3.docx")
async def download_minist3():
    """Open Minist3 DOCX in browser"""
    file_path = Path("/app/frontend/src/documents/minist3.docx")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/download/minist4.pdf")
async def download_minist4():
    """Open Minist4 PDF in browser"""
    file_path = Path("/app/frontend/src/documents/minist4.pdf")
    if file_path.exists():
        return FileResponse(
            path=file_path,
            media_type='application/pdf'
        )
    raise HTTPException(status_code=404, detail="File not found")

@api_router.get("/news-ticker")
async def get_news_ticker():
    """Get all news and events for the ticker"""
    try:
        # Latest news data
        latest_news = [
            {
                "id": 8,
                "title": "Ministerul Agriculturii vine cu o reacție în urma demersului scris de ANIPM",
                "date": "5 aprilie 2025",
                "url": "#",
                "type": "news",
                "hasDocuments": True,
                "category": "official"
            },
            {
                "id": 7,
                "title": "Schema de ajutor de stat regional pentru investiții",
                "date": "30 martie 2025",
                "url": "https://mded.gov.md/domenii/ajutor-de-stat/ajutor-de-stat-regional-pentru-investitii/",
                "type": "news"
            },
            {
                "id": 6,
                "title": "R. Moldova exportă mai multă făină, dar la un preț mult mai mic",
                "date": "29 martie 2025",
                "url": "https://agroexpert.md/rom/novosti/r-moldova-exporta-mai-multa-faina-dar-la-un-pret-mult-mai-mic",
                "type": "news"
            },
            {
                "id": 1,
                "title": "Tot mai mulți pasionați de panificație descoperă farmecul pâinii cu maia",
                "date": "15 ianuarie 2025",
                "url": "https://stiri.md/article/social/tot-mai-multi-pasionati-de-panificatie-descopera-farmecul-painii-cu-maia/",
                "type": "news"
            },
            {
                "id": 2,
                "title": "În Transnistria se vor scumpi făina și pâinea",
                "date": "12 ianuarie 2025",
                "url": "https://stiri.md/article/economic/in-transnistria-se-vor-scumpi-faina-si-painea/",
                "type": "news"
            },
            {
                "id": 3,
                "title": "Ion Perju: Prețurile s-au majorat nejustificat, grâu în țară este",
                "date": "10 ianuarie 2025",
                "url": "https://stiri.md/article/economic/ion-perju-preturile-s-au-majorat-nejustificat-grau-in-tara-este/",
                "type": "news"
            },
            {
                "id": 4,
                "title": "Cel mai mare producător din industria de panificație din Moldova înregistrează un profit record",
                "date": "21 februarie 2025",
                "url": "https://agora.md/2025/02/21/cel-mai-mare-producator-din-industria-de-panificatie-din-moldova-inregistreaza-un-profit-record",
                "type": "news"
            },
            {
                "id": 5,
                "title": "De ce brutarii din Chișinău coc din ce în ce mai puțină pâine",
                "date": "15 decembrie 2024",
                "url": "https://moldova.europalibera.org/a/27188328.html",
                "type": "news"
            }
        ]
        
        # Events data
        events = [
            {
                "id": 106,
                "title": "ENERGY TRANSITION AGENDA - 4th edition / AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
                "title_en": "ENERGY TRANSITION AGENDA - 4th edition",
                "title_ro": "AGENDA TRANZIȚIEI ENERGETICE - ediția a 4-a",
                "date": "15 Iunie 2025",
                "url": "https://eba-md.translate.goog/eng/news/energy-transition-agenda---4th-edition?_x_tr_sl=en&_x_tr_tl=ro&_x_tr_hl=ro&_x_tr_pto=sc",
                "type": "event",
                "hasVideo": True,
                "image": "/images/eta2025.jpg",
                "video": "/images/energy2025.mp4",
                "description": "Asociația Businessului European (EBA Moldova) are deosebita onoare și plăcere să vă lanseze invitația la evenimentul Energy Transition Agenda 2025.",
                "bilingual": True
            },

            {
                "id": 102,
                "title": "Expoziția IPAC IMA – 27-30 mai 2025, Milano, Italia",
                "date": "27 Mai 2025",
                "url": "https://www.ipackima.com/about/la-fiera.html",
                "type": "event"
            },
            {
                "id": 103,
                "title": "UNIDO și UE lansează un program de consolidare a capacităților pentru întreprinderile mici și mijlocii",
                "date": "20 Mai 2025",
                "url": "https://euneighbourseast.eu/ro/opportunities/unido-si-ue-lanseaza-un-program-de-consolidare-a-capacitatilor-pentru-imm-uri-operatori-din-sectorul-alimentar-si-fermieri/",
                "type": "event"
            },
            {
                "id": 104,
                "title": "Expoziţie-târg internaţională specializată de produse, utilaje, tehnologii agricole şi meşteşuguri, ediţia a XXVII-a",
                "date": "16 Octombrie 2025",
                "url": "http://www.farmer.moldexpo.md/",
                "type": "event"
            },
            {
                "id": 105,
                "title": "ANTREPRENOR EXPO - Expoziţie de dezvoltare și promovare a businessului mic și mijlociu",
                "date": "20 Noiembrie 2025",
                "url": "http://www.antreprenorexpo.moldexpo.md/",
                "type": "event"
            }
        ]
        
        # Combine and sort by date (most recent first)
        all_items = latest_news + events
        
        return {
            "success": True,
            "items": all_items,
            "total": len(all_items)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
