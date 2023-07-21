// let kana =
//   "ワラヤマハナタサカアリミヒノチシキイルユムフヌツスクウンレメヘネテセケエヲロヨモホノトソコオ";

// let romaji =
//   "wa,ra,ya,ma,ha,na,ta,sa,ka,a,ri,mi,hi,ni,chi,shi,ki,i,ru,yu,mu,fu,nu,tsu,su,ku,u,n,re,me,he,ne,te,se,ke,e,wo,ro,yo,mo,ho,no,to,so,ko,o";

let getKanaObject = (input) => {
  return kana.filter(
    (idx) => idx.romaji === input || idx.character === input
  )[0];
};

const getKanaCharacter = (romaji) => {
  try {
    let kanaObject = getKanaObject(romaji);
    let kana = kanaObject.character;
    return kana;
  } catch (error) {
    console.error(error);
    console.log(`input: ${romaji}, not found!`);
  }
};

const getRomaji = (input) => {
  let result = getKanaObject(input);
  return result.romaji;
};

const Katakana = () => {
  let kanaString =
    "ワラヤマハナタサカアリミヒノチシキイルユムフヌツスクウンレメヘネテセケエヲロヨモホノトソコオ";
  let romajiString =
    "wa,ra,ya,ma,ha,na,ta,sa,ka,a,ri,mi,hi,ni,chi,shi,ki,i,ru,yu,mu,fu,nu,tsu,su,ku,u,n,re,me,he,ne,te,se,ke,e,wo,ro,yo,mo,ho,no,to,so,ko,o";

  let kanaArray = kanaString.split("");
  let romajiArray = romajiString.split(",");
  let katakana = kanaArray.map(
    (idx, index) =>
      new Object({
        character: idx,
        romaji: romajiArray[index],
        code: idx.charCodeAt(),
      })
  );

  return katakana;
};

export default Katakana;
