function createGradeSection(grade, labelText) {
  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.textContent = labelText;
  section.appendChild(h2);

  const p = document.createElement('p');

  // Adding the new Writing button
  const writingBtn = document.createElement('button');
  writingBtn.id = `grade${grade}-writing`;
  writingBtn.className = 'button-2';
  writingBtn.textContent = 'Start';
  writingBtn.role = 'button';
  p.appendChild(writingBtn);

  section.appendChild(p);

  const container = document.createElement('div');
  container.id = `grade${grade}-kanji-container`;
  container.className = 'kanji-container';
  section.appendChild(container);

  return section;
}

function createKanjiElement(character, mastery) {
  const kanjiElement = document.createElement('span');
  kanjiElement.textContent = character;
  kanjiElement.classList.add('kanji');
  kanjiElement.classList.add(`mastery-${mastery}`);
  kanjiElement.addEventListener('click', () => {
    // Add your click handler logic here
    console.log(`Clicked on kanji: ${character}`);
  });
  return kanjiElement;
}

function insertKanjiIntoContainer(grade, kanjiData) {
  const container = document.getElementById(`grade${grade}-kanji-container`);
  kanjiData.forEach((item) => {
    const kanjiElement = createKanjiElement(item.character, item.mastery);
    container.appendChild(kanjiElement);
  });
}

async function initKanji() {
  insertKanjiIntoContainer(1, kanjiData.grade1);
  insertKanjiIntoContainer(2, kanjiData.grade2);
  insertKanjiIntoContainer(3, kanjiData.grade3);
  insertKanjiIntoContainer(4, kanjiData.grade4);
  insertKanjiIntoContainer(5, kanjiData.grade5);
  insertKanjiIntoContainer(6, kanjiData.grade6);
  insertKanjiIntoContainer(7, kanjiData.grade7);
  insertKanjiIntoContainer(8, kanjiData.grade8);
  insertKanjiIntoContainer(9, kanjiData.grade9);
  insertKanjiIntoContainer(10, kanjiData.grade10);
  // Add more grades as needed
}

function writebtAction(grade) {
  
  var cookie = getCookie('resume_'+grade);

  if(cookie) {
    if(cookie == 0) {
      //if last save was first kanji
      window.location = './japanesewriting.html?grade='+grade;
      return
    }
  }else {
    //if no save found
    window.location = './japanesewriting.html?grade='+grade;
    return
  }

  var resume_box = document.getElementById('resume-box');
  var no_button = document.getElementById('resume-box-no');
  var yes_button = document.getElementById('resume-box-yes');
  resume_box.style.display = 'block';
  no_button.addEventListener('click', () => {resume_box.style.display = 'none'});
  no_button.addEventListener('click', () => {window.location='./japanesewriting.html?grade='+grade;});
  yes_button.addEventListener('click', () => {resume_box.style.display = 'none'});
  yes_button.addEventListener('click', () => {window.location='./japanesewriting.html?grade='+grade+'&resume='+cookie;});
}

const main = document.querySelector('main');
main.appendChild(createGradeSection(1, 'Grade 1'));
main.appendChild(createGradeSection(2, 'Grade 2'));
main.appendChild(createGradeSection(3, 'Grade 3'));
main.appendChild(createGradeSection(4, 'Grade 4'));
main.appendChild(createGradeSection(5, 'Grade 5'));
main.appendChild(createGradeSection(6, 'Grade 6'));
main.appendChild(createGradeSection(7, 'Grade 7'));
main.appendChild(createGradeSection(8, 'Grade 8'));
main.appendChild(createGradeSection(9, 'Grade 9'));
main.appendChild(createGradeSection(10, 'Grade 10'));

// Call the initKanji function when the page loads
window.addEventListener('DOMContentLoaded', initKanji);

// Add event listeners for the Writing buttons
document.getElementById('grade1-writing').addEventListener('click', () => {
  writebtAction(1);
});

document.getElementById('grade2-writing').addEventListener('click', () => {
  writebtAction(2);
});

document.getElementById('grade3-writing').addEventListener('click', () => {
  writebtAction(3);
});

document.getElementById('grade4-writing').addEventListener('click', () => {
  writebtAction(4);
});

document.getElementById('grade5-writing').addEventListener('click', () => {
  writebtAction(5);
});

document.getElementById('grade6-writing').addEventListener('click', () => {
  writebtAction(6);
});

document.getElementById('grade7-writing').addEventListener('click', () => {
  writebtAction(7);
});

document.getElementById('grade8-writing').addEventListener('click', () => {
  writebtAction(8);
});

document.getElementById('grade9-writing').addEventListener('click', () => {
  writebtAction(9);
});

document.getElementById('grade10-writing').addEventListener('click', () => {
  writebtAction(10);
});