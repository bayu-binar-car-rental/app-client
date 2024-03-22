import Title from "../../components/ui/Title";

export default function SignInPage() {
  return (
    <>
      <Title title="Welcome Back!" sx={["font-medium"]} />
      <form className="space-y-3" onSubmit={() => alert("Form Submitted")}>
        <p>Email</p>
        <input
          className="p-2 px-4 w-full focus:outline-none border rounded-md"
          type="text"
          placeholder="johndoe@gmail.com"
          required
        />
        <p>Password</p>
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
          Sign In
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="/auth/sign-up" className="font-bold text-biru underline">
          Sign Up for free
        </a>
      </p>
    </>
  );
}
