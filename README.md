# PG Manager 🏠

**A comprehensive web-based management system for Paying Guest accommodations**

[![Frontend](https://img.shields.io/badge/Frontend-Angular%2020-red?style=flat-square&logo=angular)](./pg-mgmt-frontend)

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    PG Manager Platform                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐      ┌──────────────┐     ┌─────────────┐ │
│  │   Angular    │◄────►│  Spring Boot │◄───►│   MongoDB   │ │
│  │   Frontend   │ REST │    Backend   │ JPA │   Database  │ │
│  │              │ API  │              │     │             │ │
│  └──────────────┘      └──────────────┘     └─────────────┘ │
│         │                      │                     │      │
│    Material UI          JWT + OAuth            Collections: │
│    Charts.js            Scheduler              - tenants    │
│    RxJS                 Actuator               - rooms      │
│                                                - admins     │
│                                                - stats      │
└─────────────────────────────────────────────────────────────┘
```

### Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend** | Angular | 20.3 |
| | Angular Material | 20.2 |
| | Chart.js | 4.5 |
| | TypeScript | 5.9 |
---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.19+ and npm 9+

### Local Development

#### 1. Clone Repository
```bash
git clone https://github.com/harikiranvusirikala/pg-mgmt.git
cd pg-mgmt
```


#### 3. Setup Frontend
```bash
cd pg-mgmt-frontend

# Install dependencies
npm install

# Update environment.ts with backend URL and Google client ID
# src/environments/environment.ts

# Run development server
npm start
# Frontend will run on http://localhost:4200
```

#### 4. Access Application
- **Frontend:** http://localhost:4200

## 📖 Documentation

- **Frontend README:** [pg-mgmt-frontend/README.md](./pg-mgmt-frontend/README.md)

---

## 🧪 Testing

### Frontend
```bash
cd pg-mgmt-frontend
npm test              # Unit tests (Karma)
npm run build         # Production build validation
```


---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Hari Kiran Vusirikala**

- GitHub: [@harikiranvusirikala](https://github.com/harikiranvusirikala)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/hari-kiran-vusirikala/)

---

## 🙏 Acknowledgments

- [Angular Team](https://angular.io) for the amazing framework

---

## 📞 Support

Having issues? Check:

1. [Frontend README](./pg-mgmt-frontend/README.md) for setup help

---

<p align="center">Made with ❤️ for PG Managers everywhere</p>
