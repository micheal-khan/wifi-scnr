// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn get_message() -> String {
  "Hello from the Tauri backend 🚀".to_string()
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![get_message])
      .run(tauri::generate_context!())
      .expect("error while running tauri application");
}
