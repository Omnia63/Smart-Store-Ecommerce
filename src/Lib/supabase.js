import { createClient } from "@supabase/supabase-js";
console.log("SUPABASE URL:", process.env.REACT_APP_SUPABASE_URL);
console.log(
  "SUPABASE KEY:",
  process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY
);

  const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_PUBLISHABLE_KEY
);

export default supabase;