const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");


const calculateMarks = (event) => {
    const maxMarks = 400;
    event.preventDefault();

    const formData = new FormData(calculateFormEl);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = +value;
    });

    // console.log({ data });

    const totalMarks = data.maths + data.english + data.hindi + data.science;
    const percentage = Math.round((totalMarks / maxMarks) * 100);
    // const resultEl = document.createElement("p");
    resultEl.className = "result";
    resultEl.innerHTML = `You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`;
    // calculateFormEl.after(resultEl);


};














