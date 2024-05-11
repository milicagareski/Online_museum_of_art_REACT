export default interface ContactFormProps {
    successMessage: boolean;
    setSuccessMessage: React.Dispatch<React.SetStateAction<boolean>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    question: string;
    setQuestion: React.Dispatch<React.SetStateAction<string>>;
}