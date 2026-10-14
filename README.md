# POOJA.S portfolio

Plain HTML, CSS and JavaScript. No install or build step.

## Preview
Open the folder in VS Code, install the **Live Server** extension, right-click `index.html` > Open with Live Server.

## Update content (the only file you normally edit: `data.js`)
- **Text, skills, links:** change the line in `data.js`.
- **New project:** copy one block inside `projects: [ ... ]`, paste it after the last one, edit it.
- **Certificate:** put the image in `assets/certificates/`, then set `image: "your-file.jpg"` on its entry (add `issuer`, `year`, `verify` if you have them). New one? Copy an entry.
- **Profile photo:** put `photo.jpg` in `assets/`, set `photo: "assets/photo.jpg"`.

## Deploy
1. Create a GitHub repository and upload everything in this folder.
2. On vercel.com, sign in with GitHub, click **Add New > Project**, pick the repository, click **Deploy**.
3. After that, every change you push to GitHub updates the live site automatically.
