# Job Portal Application

A full-stack job portal application built with Spring Boot (Backend) and React (Frontend). This application allows users to browse, search, create, update, and delete job postings with a modern and intuitive user interface.

## 🚀 Features

- **Job Posting Management**: Complete CRUD (Create, Read, Update, Delete) operations for job posts
- **Search Functionality**: Search jobs by keywords in job profile or description
- **Modern UI**: Built with Material-UI for a responsive and beautiful user experience
- **RESTful API**: Clean and well-structured REST API endpoints
- **Database Integration**: PostgreSQL database with Spring Data JPA
- **Cross-Origin Support**: CORS enabled for frontend-backend communication

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
CREATE DATABASE wiggle;
```

3. Update database credentials in `Backend/src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/wiggle
spring.datasource.username=your_username
spring.datasource.password=your_password
```

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

- **Home Page**: Displays all job posts in a responsive grid layout
- **Search**: Real-time search functionality (searches after 3+ characters)
- **Create Job**: Form to add new job postings
- **Edit Job**: Update existing job postings
- **Delete Job**: Remove job postings with confirmation

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

## 🔒 Environment Variables

For production deployment, consider using environment variables instead of hardcoding credentials:

**Backend** (`application.properties`):
```properties
spring.datasource.url=${DATABASE_URL}
spring.datasource.username=${DATABASE_USERNAME}
spring.datasource.password=${DATABASE_PASSWORD}
```

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

Vignesh Pandi - [Your GitHub Profile](https://github.com/wigglevig)

## 🙏 Acknowledgments

- Spring Boot community
- React team
- Material-UI contributors
- Telusko
## 📞 Support

If you have any questions or issues, please open an issue on the GitHub repository.

---

**Note**: Make sure both the backend and frontend servers are running simultaneously for the application to work properly.
