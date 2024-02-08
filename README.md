<h1>SudokuCoach Web Application</h1>

<h2>Description</h2>

 - A web application built using React.js and Express.js, which allows the input of Sudoku Puzzles
and solves them for the user. The program also displays a color-coded version of the most recent pattern and a text description.
 - The algorithm searches for the following patterns: Sole Candidate, Unique Candidate, Block to Row or Column interaction,
Block to Block interaction, Naked Subset, Hidden Subset, X-Wing and Y-Wings. Some resources I used for determining the
patterns are https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php and https://www.sudokuwiki.org/Y_Wing_Strategy.
The algorithm specifically is ported from a C++ version of this project I have made to JavaScript.
- My goal is to add more functionality, as well as a database connection, and deploy it as a full-stack web application.

<h2>How to Use</h2>

 - clone repository.
 - cd into 'server', run 'npm install' then 'npm run dev'
 - cd into 'client', run 'npm install' then 'npm start'
 - use one of the presets or input your own sudoku, and step through the solution.

<h2>Samples</h2>
<h3>Sole Candidate</h3>

![SoleCandidate](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/6f13936e-a4a6-41f9-a2ab-94826ca531d9)
<br></br>
<br></br>
<h3>Unique Candidate</h3>

![UniqueCandidate](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/9108480b-d37b-49ac-a301-0bdd6ffac9f5)
<br></br>
<br></br>
<h3>Block to Row/Col</h3>

![BlockColRow](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/4f7fbf59-d394-4f12-80c0-4d24b2e64517)
<br></br>
<br></br>
<h3>Block to Block</h3>

![BlockBlock](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/265ca4b8-650e-4728-b8d4-7e91844b5575)
<br></br>
<br></br>
<h3>Naked Subset</h3>

![NakedSubset](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/2e3539d9-d806-42af-abd8-c1febddef717)
<br></br>
<br></br>
<h3>Hidden Subset</h3>

![HiddenSubset](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/3e132300-0d96-4356-a84a-ab93a1fa0ac5)
<br></br>
<br></br>
<h3>X-Wing</h3>

![XWing](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/04817f21-dd6d-4aeb-8c25-ced770f6cb8d)
<br></br>
<br></br>
<h3>Y-Wing</h3>

![YWing](https://github.com/jbmeyer2001/SudokuCoachWeb/assets/90493172/536281bd-a9cc-4b81-b63c-6cac16c2300d)
