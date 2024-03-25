import { MDXComponents, MDXStyles } from "@bacons/mdx";
import {
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { NotoColorEmoji_400Regular } from "@expo-google-fonts/noto-color-emoji";
import { SourceCodePro_400Regular } from "@expo-google-fonts/source-code-pro";
import { loadAsync } from "expo-font";
import { Text } from "react-native";

export function MarkdownTheme({ children }: { children: React.ReactNode }) {
  loadAsync({
    NotoColorEmoji_400Regular,
    SourceCodePro_400Regular,
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
  });

  return (
    <MDXStyles
      h2={{
        fontFamily: "Inter_600SemiBold",
        fontSize: "1.5rem",
        color: "white",
        marginBottom: "0.5em",
      }}
      h3={{
        fontFamily: "Inter_600SemiBold",
        fontSize: "1.25rem",
        color: "white",
        marginBottom: "0.5em",
      }}
      p={{
        fontFamily: "Inter_400Regular",
        fontSize: "1rem",
        color: "white",
        textAlign: "justify",
        marginBottom: "1.25em",
      }}
      a={{
        color: "white",
        textDecoration: "underline",
      }}
      inlineCode={{
        fontFamily: "SourceCodePro_400Regular",
        backgroundColor: "black",
        color: "white",
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: "0.25em",
        fontSize: 15,
      }}
      code={{
        fontFamily: "SourceCodePro_400Regular",
        backgroundColor: "black",
        color: "white",
        paddingVertical: 2,
        paddingHorizontal: 4,
        borderRadius: "0.25em",
        fontSize: 15,
      }}
    >
      <div className="flex flex-col">
        <MDXComponents components={{ Emoji }}>{children}</MDXComponents>
      </div>
    </MDXStyles>
  );
}

function Emoji({ children }: { children: string }) {
  return <p className="inline font-emoji">{children}</p>;
}
