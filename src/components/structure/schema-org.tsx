import Script from "next/script";
import type { Thing, WithContext } from "schema-dts";

export function JsonLd<T extends Thing>(json: WithContext<T>) {
  return (
    <Script
      id={json["@context"] || ""}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json),
      }}
    />
  );
}