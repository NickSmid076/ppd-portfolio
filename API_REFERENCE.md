# API Routes Reference

## Overview

This portfolio includes two backend API routes built with Next.js Route Handlers for contact form submissions and download tracking.

## Routes

### 1. Contact Form API

**Endpoint**: `/api/contact`  
**Method**: `POST`  
**Content-Type**: `application/json`

#### Request Body

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "I'd like to discuss a potential collaboration..."
}
```

#### Validation Rules

| Field | Type | Min Length | Max Length | Format |
|-------|------|------------|------------|--------|
| name | string | 2 | 100 | Any text |
| email | string | - | - | Valid email (regex) |
| message | string | 10 | 2000 | Any text |

#### Success Response

**Status**: `200 OK`

```json
{
  "success": true,
  "message": "Message received. Thank you!"
}
```

#### Error Responses

**Status**: `400 Bad Request`

```json
{
  "success": false,
  "message": "Name must be between 2 and 100 characters."
}
```

```json
{
  "success": false,
  "message": "Invalid email address."
}
```

```json
{
  "success": false,
  "message": "Message must be between 10 and 2000 characters."
}
```

#### Current Behavior

- Validates all fields server-side
- Logs submission to console with timestamp
- Returns JSON response

#### Future Enhancements

Replace the console.log with:

```typescript
// Send email via Resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@yourdomain.com',
  to: 'your@email.com',
  subject: `Contact from ${name}`,
  text: message,
  replyTo: email,
});
```

Or store in database:

```typescript
// Save to Supabase
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

await supabase.from('contacts').insert({
  name,
  email,
  message,
  created_at: new Date().toISOString(),
});
```

---

### 2. Download Tracking API

**Endpoint**: `/api/download`  
**Method**: `POST`  
**Content-Type**: `application/json`

#### Request Body

```json
{
  "file": "/cv.pdf"
}
```

#### Parameters

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| file | string | Yes | Path to downloaded file |

#### Success Response

**Status**: `200 OK`

```json
{
  "success": true
}
```

#### Logged Data

The API logs the following information to the console:

```
Download tracked: /cv.pdf
Timestamp: 2024-01-15T10:30:00.000Z
User-Agent: Mozilla/5.0...
```

#### Current Behavior

- Accepts file path
- Logs download event with timestamp and user-agent
- Returns success response

#### Future Enhancements

Store analytics in database:

```typescript
// Track downloads in Supabase
await supabase.from('downloads').insert({
  file_path: file,
  user_agent: headers().get('user-agent'),
  ip_address: headers().get('x-forwarded-for'),
  timestamp: new Date().toISOString(),
});
```

Or send to analytics service:

```typescript
// Send to Google Analytics
await fetch('https://www.google-analytics.com/collect', {
  method: 'POST',
  body: new URLSearchParams({
    v: '1',
    tid: process.env.GA_TRACKING_ID!,
    cid: 'client-id',
    t: 'event',
    ec: 'file',
    ea: 'download',
    el: file,
  }),
});
```

---

## Usage Examples

### Contact Form Submission

```typescript
// Client-side (from Contact page)
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const formData = new FormData(e.target as HTMLFormElement);
  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    message: formData.get('message') as string,
  };
  
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  
  const result = await response.json();
  
  if (result.success) {
    // Show success message
    setSuccess(true);
  } else {
    // Show error message
    setError(result.message);
  }
};
```

### Download Tracking

```typescript
// Client-side (from PdfViewer component)
const handleDownload = async () => {
  try {
    await fetch('/api/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ file: '/cv.pdf' }),
    });
  } catch (error) {
    console.error('Download tracking failed:', error);
  }
  
  // Open file regardless of tracking result
  window.open('/cv.pdf', '_blank');
};
```

---

## Testing

### Test Contact Form

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message for the contact form."
  }'
```

**Expected**: Success response + console log

### Test Download Tracking

```bash
curl -X POST http://localhost:3000/api/download \
  -H "Content-Type: application/json" \
  -d '{"file": "/cv.pdf"}'
```

**Expected**: Success response + console log

### Test Validation Errors

```bash
# Invalid email
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "not-an-email",
    "message": "Test message"
  }'

# Short name
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "A",
    "email": "test@example.com",
    "message": "Test message"
  }'

# Short message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Too short"
  }'
```

**Expected**: Error responses with specific validation messages

---

## Environment Setup

### Current (Development)

No environment variables required. APIs log to console.

### Production (with Resend)

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
```

### Production (with Supabase)

```env
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_ANON_KEY=eyJxxxxxxxxxxxxxxxxxxxx
```

---

## File Locations

```
src/
├── app/
│   └── api/
│       ├── contact/
│       │   └── route.ts      # Contact form handler
│       └── download/
│           └── route.ts      # Download tracker
├── app/(site)/
│   └── contact/
│       └── page.tsx          # Contact form UI
└── components/
    └── media/
        └── PdfViewer.tsx     # PDF viewer with tracking
```

---

## Security Notes

1. **Server-side validation**: All validation happens on the server, not just client-side
2. **Email regex**: Uses strict regex pattern to prevent invalid emails
3. **Length constraints**: Prevents abuse with min/max length validation
4. **No database yet**: Currently logging only; safe for development
5. **CORS**: Next.js API routes are same-origin by default
6. **Rate limiting**: Consider adding rate limiting in production

### Recommended: Add Rate Limiting

```typescript
// middleware.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests per minute
});

export async function middleware(request: Request) {
  if (request.url.includes('/api/contact')) {
    const { success } = await ratelimit.limit(
      request.headers.get('x-forwarded-for') || 'anonymous'
    );
    if (!success) {
      return new Response('Too many requests', { status: 429 });
    }
  }
}
```

---

## Monitoring

### Development

Check terminal for logs:
```
Contact form submission received:
Name: John Doe
Email: john@example.com
Message: I'd like to discuss...
Timestamp: 2024-01-15T10:30:00.000Z
```

### Production (Vercel)

View logs in Vercel dashboard:
- Navigate to your project
- Click "Deployments"
- Select latest deployment
- Click "Functions" tab
- View real-time logs

---

## Troubleshooting

### Contact form not submitting
1. Check browser console for errors
2. Verify network request in DevTools
3. Check API route is deployed
4. Verify JSON body format

### Download tracking not firing
1. Check PdfViewer component implementation
2. Verify fetch call is made before window.open
3. Check network tab for API call
4. Review console for errors

### Validation errors
1. Ensure all fields meet requirements
2. Check email format
3. Verify message length
4. Test with curl for debugging

---

**Last Updated**: January 2024  
**Status**: Production-ready ✅
