import { useTranslation, Trans } from "next-i18next";
import { Noto_Sans_Bengali } from "next/font/google";

const noto = Noto_Sans_Bengali({ subsets: ["bengali"] });

interface QuestionProps {
  shiftBackgroundForward: (e: React.MouseEvent<HTMLButtonElement>) => void;
  shiftBackgroundBackward: (e: React.MouseEvent<HTMLButtonElement>) => void;
  question: string;
  options: QuestionOption[];
  pageNo: number;
}

interface QuestionOption {
  option: string;
  points: number[];
}

export default function Question({
  shiftBackgroundForward,
  shiftBackgroundBackward,
  pageNo,
}: QuestionProps) {
  const { t, i18n } = useTranslation();

  return (
    <div
      className={
        "flex flex-col gap-5 max-w-md w-full items-center justify-between text-sm text-black mx-auto " +
        noto.className
      }
    >
      <div className="flex w-full justify-between px-6">
        <button
          disabled={false}
          className="quiz-nav-button"
          onClick={shiftBackgroundBackward}
        >
          {t("back")}
        </button>

        <button
          disabled={true}
          className="quiz-nav-button"
          onClick={shiftBackgroundForward}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
}
