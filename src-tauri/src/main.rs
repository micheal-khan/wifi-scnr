#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

use tauri::Manager;

#[tauri::command]
fn hello_world() -> String {
  "Hello World from Tauri!".into()
}

fn main() {
  tauri::Builder::default()
      .invoke_handler(tauri::generate_handler![hello_world])
      .run(tauri::generate_context!())
      .expect("error while running Tauri app");
}
