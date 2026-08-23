# OJTConnect

**OJTConnect: A Web-Based Internship Application, Deployment, and OJT Monitoring System for Information Technology Students**

Connecting students, schools, and opportunities.

OJTConnect is a professional internship operations platform for students, OJT coordinators, partner companies, and company supervisors. It is built as a Laravel + Inertia + React application suitable for institutional use and capstone demonstration.

## Features

Planned product capabilities (rolled out by implementation phase):

- Role-based access for students, coordinators, companies, and supervisors
- Company discovery and internship applications
- Coordinator-managed deployment and OJT hour tracking
- Attendance, weekly reports, documents, and evaluations
- In-app notifications, analytics, and audit logs

Phase 1 (current) provides the application foundation: Laravel, React, TypeScript, Inertia.js, Tailwind CSS, MySQL configuration, authentication starter (Fortify), dashboard shell, and development tooling.

## Technology stack

| Layer | Stack |
| --- | --- |
| Backend | PHP 8.3+, Laravel 13, Fortify, Inertia Laravel |
| Frontend | React 19, TypeScript, Inertia.js, Tailwind CSS 4, Vite |
| Database | MySQL |
| UI | Lucide icons, accessible Radix primitives, Sonner toasts |
| Tests | PHPUnit |

## Requirements

- PHP 8.3 or newer with Composer
- Node.js 20+ and npm
- MySQL 8+

Laravel Herd is a convenient local stack on Windows.

## Installation

```bash
git clone <repository-url> ojtconnect
cd ojtconnect
composer install
copy .env.example .env   # Windows
php artisan key:generate
npm install
```

## Environment configuration

Copy `.env.example` to `.env` and set at least:

```
APP_NAME=OJTConnect
APP_URL=http://localhost:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ojtconnect
DB_USERNAME=root
DB_PASSWORD=
```

Never commit `.env`, API keys, or production credentials.

## Database setup

Create an empty MySQL database named `ojtconnect`, then:

```bash
php artisan migrate
```

Domain seeders and demo accounts are added in a later phase. Do not use development credentials in production.

## Running the development server

```bash
composer run dev
```

This starts the Laravel server, queue listener, and Vite. Open `http://localhost:8000`.

Alternatively:

```bash
php artisan serve
npm run dev
```

## Building for production

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Serve the `public` directory through your web server with `APP_DEBUG=false`.

## Testing

```bash
php artisan test
npm run types:check
npm run lint:check
npm run build
```

## Demo accounts

Demo users will be documented here after database seeding is implemented. They are for local development only.

## Project structure

```
app/                 Laravel application (HTTP, models, services)
database/            Migrations, factories, seeders
resources/js/        Inertia React pages, layouts, components
resources/css/       Tailwind entry
routes/              Web and settings routes
tests/               PHPUnit feature and unit tests
```

## Security considerations

- Authentication uses hashed passwords and Laravel session cookies.
- CSRF protection is enabled on mutating requests.
- `.env` is gitignored; keep `APP_DEBUG=false` in production.
- Role authorization, file-upload hardening, and IDOR policies are implemented as domain modules are added.
- Never store secrets in the repository.

## License

MIT
