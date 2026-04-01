# Sunnah.now Waitlist
<img width="2880" height="2270" alt="sunnah now" src="https://github.com/user-attachments/assets/41ca571d-1c1f-4a04-97c7-0156a3980326" />

Sunnah.now is a developer-first digital repository providing high-fidelity Hadith data through a modern API and scholarly-curated datasets. This repository contains the source code for the landing page and waitlist for the upcoming Sunnah.now platform.

The mission of Sunnah.now is to facilitate the access and distribution of verified and structured Hadith literature. Many existing solutions are either restricted by rate limits, remain closed-source, or lack downloadable, structured formats. Sunnah.now aims to bridge this gap by offering an open, unified API and database that serves both developers and researchers.

### Vision

> مَن دَلَّ على خَيرٍ فله مِثلُ أَجْرِ فاعِلِه
>
> "Whoever guides someone to virtue will be rewarded equivalent to him who practices that good action"
>
> — Riyad as-Salihin (رياض الصالحين) 173

Our objective is to provide:

- A unified API for multiple Hadith collections.
- Downloadable and structured datasets.
- Open-source contributions to ensure accuracy and accessibility.

### Development

#### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

#### Installation

Clone the repository and install the necessary dependencies:

```bash
git clone https://github.com/sunnah-now/waitlist.git
cd waitlist
make install
```

#### Environment Configuration

Create a `.env` file in the root directory and provide the required environment variables as specified in `.env.example`.

#### Available Scripts

- `make serve`: Starts the development server at `http://localhost:3000`.
- `make build`: Generates the production build in the `dist` directory.
- `make lint`: Performs type-checking using the TypeScript compiler (must for contributing).
- `make format`: Formats the codebase using Prettier (must for contributing).
- `make format-check`: Checks the codebase formatting with Prettier (dry run).
- `make clean`: Removes the `dist` directory.

### License

This project is licensed under the **MIT License**. We believe in open access and encourage ethical use of the data and tools provided.

### Contributing

**Everyone is welcome to contribute!**

The mission of Sunnah.now is for the benefit of the Ummah, and we invite developers, researchers, and students of knowledge to participate in this noble effort. Whether it's fixing bugs, improving documentation, or suggesting new features, your contribution is a valuable service.

Please feel free to open issues, submit pull requests, or reach out to us. This project is a collective effort for the sake of the Ummah, and every contribution matters.
