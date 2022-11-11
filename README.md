# Responsive CV

- Responsive portfolio using css media queries and ReactJS to manage reusable componenets. 
- This site only contains layout of a CV, data and cv-content is pulled from secret gist: https://gist.github.com/pritamprasd/dc5f7deeccc69a21ef288e6903d833c7

### How to build/run:
Duhhhh.., it's a ReactJS site. `yarn` -> `yarn start`

### Update cv content:
1. Create a Gits(Secret gist will do) similar to `https://gist.github.com/pritamprasd/dc5f7deeccc69a21ef288e6903d833c7`, and update content in the yaml file.
2. Update the gist raw link to gist in `Page.jsx` , `config_url` var.
3. Build/run webapp

### Create a online cv with Github pages. [FREE]
1. Fork this repository.
2. Create a new **public** repository with name: `<your-username>.github.io`. This is where we'll host the CV in webpage form.
3. Update workflows/node.js.yml:
    - destination-github-username: <your-username>
    - destination-repository-name: <your-username>.github.io
    - user-email: <your-email>
4. Create a `Github API Token`. [Settings ->  Developer settings -> Personal access token -> Tokens(classic) -> Generate New Token (classic) -> provide repo access(checkbox in first line of scopes) -> ]
5. Add the token to the forked repository as `API_TOKEN_GITHUB`. [repository Settings Tab -> Secrets -> Actions -> Create new secret -> Name:API_TOKEN_GITHUB Secret: <generated-in-previous-step>]
6. Run Github Actions. [Make a dummy commit to `main` branch]
  
#### Bonus: 
Create a short link like `https://bit.ly/pritamprasad` in `bit.ly` [Again FREE] and redirect to your Github Page site. 
