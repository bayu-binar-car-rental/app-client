import Title from "../../components/ui/Title";

export default function SignUpPage() {
  return (
    <>
      <Title title="Sign Up" sx={["font-medium"]} />
      <form className="space-y-3" onSubmit={() => alert("Form Submitted")}>
        <p>Name*</p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="text"
          placeholder="Nama Lengkap"
          required
        />
        <p>Email*</p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="text"
          placeholder="johndoe@gmail.com"
          required
        />
        <p>Password*</p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="text"
          placeholder="6+ karakter"
          required
        />
        <button
          type="submit"
          className="bg-biru p-2 text-white w-full rounded-sm"
        >
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a href="/auth/sign-in" className="font-bold text-biru underline">
          Sign In here
        </a>
      </p>
    </>
  );
}
