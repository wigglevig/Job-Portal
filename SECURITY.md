# Security Guide

## 🔐 Protecting Database Credentials

### Current Status

The `application.properties` file has been updated to use environment variables and is now gitignored. However, if you've already committed sensitive credentials to git, follow these steps:

### Step 1: Remove from Git Tracking

If `application.properties` is already tracked in git, remove it:

```bash
git rm --cached Backend/src/main/resources/application.properties
git commit -m "Remove sensitive credentials from version control"
```

### Step 2: Update Your Local File

1. Copy the example file:
   ```bash
   cp Backend/src/main/resources/application.properties.example Backend/src/main/resources/application.properties
   ```

2. Edit `application.properties` with your actual credentials (this file is now gitignored)

### Step 3: Change Your Database Password (IMPORTANT)

If your repository is public or shared, **immediately change your database password** since it may have been exposed in git history.

### Step 4: Use Environment Variables (Recommended)

Instead of hardcoding credentials, use environment variables:

**Linux/Mac:**
```bash
export DATABASE_URL=jdbc:postgresql://localhost:5432/jobportal
export DATABASE_USERNAME=your_username
export DATABASE_PASSWORD=your_password
```

**Windows (PowerShell):**
```powershell
$env:DATABASE_URL="jdbc:postgresql://localhost:5432/jobportal"
$env:DATABASE_USERNAME="your_username"
$env:DATABASE_PASSWORD="your_password"
```

### Step 5: Clean Git History (Optional but Recommended)

If you need to completely remove sensitive data from git history:

**Using git filter-branch:**
```bash
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch Backend/src/main/resources/application.properties" \
  --prune-empty --tag-name-filter cat -- --all
```

**Or use BFG Repo-Cleaner (easier):**
1. Download BFG: https://rtyley.github.io/bfg-repo-cleaner/
2. Run: `bfg --delete-files application.properties`
3. Clean up: `git reflog expire --expire=now --all && git gc --prune=now --aggressive`

⚠️ **Warning**: Rewriting git history will require force push and coordination with team members.

## ✅ Best Practices

1. ✅ Never commit `application.properties` with real credentials
2. ✅ Use `application.properties.example` as a template
3. ✅ Use environment variables for sensitive data
4. ✅ Add `.env` files to `.gitignore`
5. ✅ Use different credentials for development, staging, and production
6. ✅ Rotate passwords regularly
7. ✅ Use secrets management tools for production (AWS Secrets Manager, HashiCorp Vault, etc.)

## 📝 Current Configuration

- ✅ `application.properties` is in `.gitignore`
- ✅ `application.properties.example` is committed (template only)
- ✅ Application supports environment variables
- ✅ Default values use placeholders

