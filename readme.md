Personal portfolio website.

# Running locally
There are two options:
 1. Just double click the `index.html` and the site should load.
 2. If you're in a linux environment and have Python 3 installed, just navigate to the `src` directory and run `python3 -m http.server 1234` to run it on port `1234`. It should then be accessible at `http://localhost:1234/`

## Note:
HTML pages lose their `.html` suffix when deployed, for instance a deployed address might be `kevisual.com/3d` and not `kevisual.com/3d.html`. As such, when running locally, links won't work correctly.

# Making modifications
This is a fairly straight forward vanilla HTML, CSS and JavaScript however, to make html files reusable, they need to be converted to JavaScript components. I have included shell script file: `escapeHTML.sh` to streamline this step. The process is as follows:
 - Make sure there is at least one blank line at the bottom of the html file you wish to convert (e.g.`header.html`)
 - In a linux terminal, navigate to the folder with the file
 - Convert it to JavaScript by running `../escapeHTML.sh <file_name>.html`
 - Now the component can be used inside the main HTML file by including the following code: `<script src="<file_name>.js"></script>`

## Converting images to .webp
 - In a Linux terminal install webp with `sudo apt install webp`
 - Navigate to the media folder
 - Run `cwebp -q 90 <file_name>.png -o <file_name>.webp`
