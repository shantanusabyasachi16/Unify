import { PlaceholdersAndVanishInput } from "./componentss/UI/Placeholder";

export function PlaceholdersAndVanishInputDemo({ onChange, onSubmit, value }) {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  return (
    <form onSubmit={onSubmit} className="flex items-center gap-2">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={onChange}
        value={value}
        className="input input-bordered rounded-md flex-grow h-10 px-4 text-white"
      />
    </form>
  );
}
