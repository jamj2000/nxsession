'use server'
import { redirect } from "next/navigation";
import { deleteCookie, setCookie } from "./cookies";


export async function login(formData) {
  const LOGIN_URL = '/'

  // Obtener usuario datos del formulario
  const name = formData.get('name') || 'jose'
  const email = formData.get('email') || 'jose@jose.com'
  const callbackUrl = formData.get('callbackUrl') || LOGIN_URL

  // Comprobar si credenciales son válidas
  const authenticated = true  // suponemos que son válidas

  if (!authenticated) return 

  // Si hay autenticación correcta, creamos cookie de sesión
  await setCookie( 'session', { name, email })

  redirect(callbackUrl);
}



export async function logout() {
  // Eliminamos cookie de sesión
  deleteCookie('session')

  redirect("/");
}


