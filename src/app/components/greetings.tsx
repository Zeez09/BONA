export default function Greeting() {
  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return <h1 className="text-xl text-center md:text-6xl font-bold">{greeting}, Bona. How are you feeling today?</h1>;
}