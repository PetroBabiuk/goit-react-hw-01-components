function getRandomColor() {
    const r = (Math.floor(Math.random() * 255));
    const g = (Math.floor(Math.random() * 255));
    const b = (Math.floor(Math.random() * 255));
    // console.log(`rgb(${r}, ${g}, ${b})`);
    return (`rgb(${r}, ${g}, ${b})`);
}
export default getRandomColor;