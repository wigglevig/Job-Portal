# Job Portal Application

A full-stack job portal application built with Spring Boot (Backend) and React (Frontend). This application allows users to browse, search, create, update, and delete job postings with a modern and intuitive user interface.

## 📸 Screenshots

### Home Page - Job Listings
<div align="center">
  <img src="./images/job-portal-screenshot.png" alt="Job Portal Home Page" width="100%"/>
</div>
*Home page showing the modern UI with gradient background, job cards, search functionality, and responsive design*

### Create Job Post Page
<div align="center">
  <img src="./images/create-job-post-screenshot.png" alt="Create Job Post Form" width="100%"/>
</div>
*Create job post form with modern card design, gradient header, and intuitive skill selection*

> **📸 To add your screenshots**: 
> - Home page: Save as `images/job-portal-screenshot.png`
> - Create page: Save as `images/create-job-post-screenshot.png`
> 
> For GitHub, you can also use raw GitHub URLs: `https://raw.githubusercontent.com/yourusername/job-portal/main/images/filename.png`

## 🚀 Features

- **Job Posting Management**: Complete CRUD (Create, Read, Update, Delete) operations for job posts
- **Advanced Search**: Debounced search functionality (500ms delay) with real-time filtering by keywords in job profile or description
- **Modern UI**: Beautiful gradient design with Material-UI components, smooth animations, and responsive layouts
- **Loading States**: Visual feedback with loading indicators during API calls and searches
- **RESTful API**: Clean and well-structured REST API endpoints
- **Database Integration**: PostgreSQL database with Spring Data JPA
- **Cross-Origin Support**: CORS enabled for frontend-backend communication
- **Responsive Design**: Fully responsive interface that works seamlessly on desktop, tablet, and mobile devices

## 🛠️ Tech Stack

### Backend
- **Java 21**
- **Spring Boot 3.5.4**
- **Spring Data JPA**
- **PostgreSQL**
- **Lombok**
- **Maven**

### Frontend
- **React 18.2.0**
- **Material-UI (MUI) 5.15.0**
- **React Router DOM 6.21.0**
- **Axios 1.6.2**
- **Node.js**

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Java Development Kit (JDK) 21** or higher
- **Maven 3.6+**
- **Node.js 14+** and **npm**
- **PostgreSQL 12+**
- **Git**

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/job-portal.git
cd job-portal
```

### 2. Database Setup

1. Install and start PostgreSQL
2. Create a new database:
```sql
CREATE DATABASE jobportal;
```

3. Configure database credentials:
   - Copy the example properties file:
     ```bash
     cp Backend/src/main/resources/application.properties.example Backend/src/main/resources/application.properties
     ```
   - Edit `Backend/src/main/resources/application.properties` and update with your credentials:
     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/jobportal
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```
   
   **⚠️ Security Note**: The `application.properties` file is gitignored to protect your credentials. Never commit sensitive information to version control.

   **Alternative - Using Environment Variables** (Recommended for production):
   ```bash
   export DATABASE_URL=jdbc:postgresql://localhost:5432/jobportal
   export DATABASE_USERNAME=your_username
   export DATABASE_PASSWORD=your_password
   ```
   The application will automatically use these environment variables if set.

### 3. Backend Setup

1. Navigate to the backend directory:
```bash
cd Backend
```

2. Build the project using Maven:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`

4. Load initial data (optional):
   - Visit `http://localhost:8080/load` to populate the database with sample job posts

### 4. Frontend Setup

1. Navigate to the frontend directory (in a new terminal):
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The frontend application will start on `http://localhost:3000`

## 📁 Project Structure

```
Job-Portal/
├── Backend/
│   ├── src/
│   │   └── main/
│   │       ├── java/
│   │       │   └── com/wiggle/springbootrest/
│   │       │       ├── JobRestController.java    # REST API endpoints
│   │       │       ├── model/
│   │       │       │   └── JobPost.java         # Job entity model
│   │       │       ├── repo/
│   │       │       │   └── JobRepo.java          # JPA repository
│   │       │       └── service/
│   │       │           └── JobService.java       # Business logic
│   │       └── resources/
│   │           └── application.properties       # Configuration
│   └── pom.xml                                   # Maven dependencies
│
└── Frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AllPosts.jsx                      # Display all job posts
    │   │   ├── Create.jsx                        # Create new job post
    │   │   ├── Edit.jsx                          # Edit existing job post
    │   │   └── Navbar.jsx                        # Navigation component
    │   └── App.js                                # Main application component
    └── package.json                              # Node dependencies
```

## 🔌 API Endpoints

### Base URL: `http://localhost:8080`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/jobPosts` | Get all job posts |
| GET | `/jobPost/{postId}` | Get a specific job post by ID |
| GET | `/jobPosts/keyword/{keyword}` | Search jobs by keyword |
| POST | `/jobPost` | Create a new job post |
| PUT | `/jobPost` | Update an existing job post |
| DELETE | `/jobPost/{postId}` | Delete a job post by ID |
| GET | `/load` | Load sample data into database |

### Example API Request

**Create a Job Post:**
```bash
POST http://localhost:8080/jobPost
Content-Type: application/json

{
  "postId": 6,
  "postProfile": "Full Stack Developer",
  "postDesc": "Experience in React and Spring Boot",
  "reqExperience": 3,
  "postTechStack": ["React", "Spring Boot", "PostgreSQL"]
}
```

## 📊 Data Model

### JobPost Entity

```java
{
  "postId": Integer,           // Unique identifier
  "postProfile": String,       // Job title/position
  "postDesc": String,          // Job description
  "reqExperience": Integer,    // Required experience in years
  "postTechStack": List<String> // List of required technologies
}
```

## 🎨 Frontend Features

- **Home Page**: 
  - Beautiful gradient background with modern card-based layout
  - Responsive grid system that adapts to different screen sizes
  - Hover effects and smooth transitions on job cards
  - Skills displayed as styled chips
  - Icon-based visual indicators for job details

- **Search Functionality**: 
  - Debounced search (500ms delay) to optimize API calls
  - Real-time search with loading indicators
  - Searches after 3+ characters for better performance
  - Visual feedback during search operations
  - Empty state messages for better UX

- **Create Job**: 
  - Modern form design with gradient header (see screenshot above)
  - Material-UI checkboxes for skill selection
  - Form validation and error handling
  - Clean, intuitive interface
  - Centered card layout with smooth transitions

- **Edit Job**: 
  - Pre-populated form with existing job data
  - Consistent design with Create page
  - Skill selection with toggle functionality
  - Smooth navigation and updates

- **Delete Job**: 
  - One-click delete with icon buttons
  - Tooltips for better user guidance
  - Immediate UI updates after deletion

- **Navigation**: 
  - Sticky navigation bar with gradient design
  - Icon-based navigation buttons
  - Smooth page transitions
  - Responsive menu layout

## 🧪 Testing

### Backend Testing
```bash
cd Backend
mvn test
```

### Frontend Testing
```bash
cd Frontend
npm test
```

## 🚀 Building for Production

### Backend
```bash
cd Backend
mvn clean package
```
The JAR file will be created in `Backend/target/`

### Frontend
```bash
cd Frontend
npm run build
```
The production build will be in `Frontend/build/`

## 🔒 Security & Environment Variables

### Protecting Sensitive Data

The `application.properties` file is **gitignored** to prevent committing sensitive credentials. The application supports environment variables for secure configuration.

### Using Environment Variables (Recommended)

Set these environment variables before running the application:

**Linux/Mac:**
```bash
export DATABASE_URL=jdbc:postgresql://localhost:5432/jobportal
export DATABASE_USERNAME=your_username
export DATABASE_PASSWORD=your_password
```

**Windows (Command Prompt):**
```cmd
set DATABASE_URL=jdbc:postgresql://localhost:5432/jobportal
set DATABASE_USERNAME=your_username
set DATABASE_PASSWORD=your_password
```

**Windows (PowerShell):**
```powershell
$env:DATABASE_URL="jdbc:postgresql://localhost:5432/jobportal"
$env:DATABASE_USERNAME="your_username"
$env:DATABASE_PASSWORD="your_password"
```

The application will automatically use these environment variables. If not set, it will fall back to default values or prompt for configuration.

### Configuration Priority

1. **Environment Variables** (Highest priority)
2. **application.properties** file (if environment variables are not set)
3. **Default values** (if neither is provided)

### Removing Credentials from Git History

If you've already committed sensitive data, you should:
1. **Change your database password immediately** (if the repository is public)
2. Remove the file from git tracking: 
   ```bash
   git rm --cached Backend/src/main/resources/application.properties
   ```
3. Commit the change: 
   ```bash
   git commit -m "Remove sensitive credentials from version control"
   ```
4. For sensitive projects, consider using `git filter-branch` or BFG Repo-Cleaner to remove from history

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Vignesh Pandi - [My GitHub Profile](https://github.com/wigglevig)

## 🙏 Acknowledgments

- Spring Boot community
- React team
- Material-UI contributors
- Telusko 
## 📞 Support

If you have any questions or issues, please open an issue on the GitHub repository.

---

## 🎯 Key Improvements

- **Performance Optimized**: Debounced search reduces unnecessary API calls
- **Enhanced UX**: Loading states, smooth animations, and visual feedback
- **Modern Design**: Gradient themes, Material-UI components, and professional styling
- **Responsive**: Works perfectly on all device sizes
- **User-Friendly**: Intuitive navigation, clear visual hierarchy, and helpful tooltips

---

**Note**: Make sure both the backend and frontend servers are running simultaneously for the application to work properly.
