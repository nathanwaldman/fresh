import { RouteConfig } from "$fresh/server.ts";

export const config: RouteConfig = {
  skipAppTemplate: true,
};

export default function OverridePage() {
  return (
    <p class="no-app">
      no <code>_app.tsx</code> template
    </p>
  );
}
