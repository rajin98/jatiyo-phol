import { useTranslation, Trans } from "next-i18next";
import Select, { ActionMeta, SingleValue, OptionsOrGroups } from "react-select";

interface LandingProps {
  shiftBackgroundForward: (e: React.MouseEvent<HTMLButtonElement>) => void;
  pageNo: number;
}

interface Option {
  label: string;
  value: string;
}

const langs: Option[] = [
  { value: "bn", label: "বাংলা" },
  { value: "en", label: "English" },
];

export default function Landing({
  shiftBackgroundForward,
  pageNo,
}: LandingProps) {
  const { t, i18n } = useTranslation();

  function updateLanguage(option: Option, actionMeta: ActionMeta<string>) {
    i18n.changeLanguage(option.value);
  }

  return (
    <div className="flex flex-col gap-5 max-w-md w-full items-center justify-between font-bangla text-sm text-black mx-auto">
      <h1 className={"text-center "}>
        <Trans
          i18nKey="title"
          components={{
            regular: (
              <div
                className={
                  i18n.language == "en"
                    ? "text-5xl"
                    : "text-[2.35rem] leading-[2.35rem]"
                }
              />
            ),
            highlight: <div className="h1-highlight" />,
          }}
        />
      </h1>
      <button
        className="py-2.5 px-5 rounded-full bg-red text-white text-xl transition-all relative top-0 hover:top-[-3px] hover:shadow-md"
        onClick={shiftBackgroundForward}
      >
        {t("start")}
      </button>
      <Select
        className="cursor-pointer"
        classNames={{
          control: (state) =>
            state.menuIsOpen ? "select-lang-open" : "select-lang-close",
        }}
        defaultValue={{ value: "bn", label: "বাংলা" }}
        onChange={updateLanguage}
        options={langs}
      />
    </div>
  );
}
