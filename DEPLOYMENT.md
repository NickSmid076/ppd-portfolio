# Deployment Checklist

## Pre-Deployment Verification

### ✅ Build Status
- [x] Production build completes successfully (`npm run build`)
- [x] No TypeScript errors
- [x] No ESLint warnings
- [x] All routes compile correctly

### ✅ Code Quality
- [x] No duplicate code
- [x] No unused imports
- [x] No unused files
- [x] Consistent code formatting
- [x] Type safety across all files

### ✅ Functionality Testing

#### Pages
- [ ] Homepage loads and displays correctly
- [ ] About page shows profile and content
- [ ] Contact page renders form and CV preview
- [ ] Assignments overview displays all cards
- [ ] All 6 assignment pages load:
  - [ ] Self-Scan
  - [ ] PDP
  - [ ] Midterm PDP
  - [ ] Critical Incidents
  - [ ] AI Usage
  - [ ] Personal Branding
- [ ] Logbook timeline shows 20 weeks
- [ ] Individual week pages load (test week 1, 7, 13, 15)
- [ ] Blog post displays with pull quotes
- [ ] 404 page shows for invalid routes

#### Components
- [ ] Header navigation works (mobile and desktop)
- [ ] Mobile menu opens/closes correctly
- [ ] Footer links are clickable
- [ ] Modal opens and closes
- [ ] Tabs switch content correctly
- [ ] Critical Incident cards expand/collapse
- [ ] PDF viewer displays documents
- [ ] Video player loads and plays
- [ ] Timeline items are clickable

#### API Routes
- [ ] Contact form submits successfully
- [ ] Contact form validation works (try invalid email, short name, etc.)
- [ ] Success message displays after submission
- [ ] Error message displays for validation failures
- [ ] PDF download tracking fires
- [ ] Console logs show contact submissions
- [ ] Console logs show download events

### ✅ SEO & Metadata
- [x] `NEXT_PUBLIC_BASE_URL` environment variable set
- [x] Open Graph metadata configured
- [x] Twitter card metadata configured
- [x] Page titles are descriptive
- [x] Meta descriptions present
- [x] Keywords array defined

### ✅ Accessibility
- [x] All images have alt text
- [x] ARIA labels on interactive elements
- [x] Semantic HTML throughout
- [x] Keyboard navigation works
- [x] Focus states visible
- [ ] Test with screen reader (recommended)

### ✅ Performance
- [x] Images optimized (Next.js Image component where applicable)
- [x] No unnecessary re-renders
- [x] Code split by route (Next.js default)
- [x] Static pages pre-rendered
- [ ] Lighthouse score > 90 (run after deployment)

### ✅ Responsive Design
- [ ] Test on mobile (320px - 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] All text readable at all sizes
- [ ] No horizontal scroll
- [ ] Touch targets large enough on mobile

### ✅ Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Deployment Steps

### 1. Environment Setup
```bash
# Ensure environment variables are ready
cp .env.example .env.local
# Set NEXT_PUBLIC_BASE_URL for production
```

### 2. Final Build Test
```bash
npm run build
npm start
# Test at http://localhost:3000
```

### 3. Git Preparation
```bash
git add .
git commit -m "feat: production-ready portfolio with backend"
git push origin main
```

### 4. Vercel Deployment

#### Option A: Vercel CLI
```bash
npm i -g vercel
vercel
# Follow prompts
```

#### Option B: Vercel Dashboard
1. Go to https://vercel.com/new
2. Import Git repository
3. Configure:
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Add environment variable:
   - `NEXT_PUBLIC_BASE_URL` = `https://your-domain.vercel.app`
5. Click Deploy

### 5. Post-Deployment Testing
- [ ] Visit deployed URL
- [ ] Test contact form submission
- [ ] Test PDF downloads
- [ ] Check all routes load
- [ ] Verify Open Graph preview (use https://www.opengraph.xyz/)
- [ ] Test on mobile device
- [ ] Run Lighthouse audit
- [ ] Check console for errors

## Production Configuration

### Environment Variables (Vercel)
```
NEXT_PUBLIC_BASE_URL=https://your-portfolio.vercel.app
```

### Future Integrations (Optional)
If you want to add email sending or database storage:

1. **Resend (Email Service)**:
   - Sign up at https://resend.com
   - Get API key
   - Add `RESEND_API_KEY` to Vercel env vars
   - Update `/api/contact` to send emails

2. **Supabase (Database)**:
   - Sign up at https://supabase.com
   - Create project
   - Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to Vercel env vars
   - Update API routes to store submissions

## Monitoring & Maintenance

### Post-Launch
- [ ] Set up Vercel Analytics (free tier)
- [ ] Monitor build logs for errors
- [ ] Check contact form submissions (currently console-logged)
- [ ] Review download tracking data
- [ ] Update content as needed

### Regular Checks
- [ ] Dependencies up to date (`npm outdated`)
- [ ] Security vulnerabilities (`npm audit`)
- [ ] Performance metrics (Vercel Analytics)

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct
- Ensure no duplicate exports

### Contact Form Not Working
- Check browser console for errors
- Verify API route is deployed (`/api/contact`)
- Test validation with invalid inputs

### Images Not Loading
- Verify file paths are correct
- Check `public/` directory contains files
- Ensure Next.js Image component configured

### Metadata Not Showing
- Verify `NEXT_PUBLIC_BASE_URL` is set
- Check Open Graph validator
- Ensure metadata is in root layout.tsx

## Success Criteria

Your portfolio is ready when:
- ✅ Production build succeeds
- ✅ All pages render correctly
- ✅ Contact form submits and validates
- ✅ API routes log data
- ✅ SEO metadata configured
- ✅ Responsive on all devices
- ✅ No console errors
- ✅ Deployed to Vercel
- ✅ Custom domain configured (optional)

---

**Estimated deployment time**: 15-30 minutes
**Status**: Ready for deployment ✅
