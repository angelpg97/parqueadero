import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // Ejemplo de función para insertar datos
  async insertarDatos(tabla: string, datos: any) {
    const { data, error } = await this.supabase.from(tabla).insert([datos]);
    if (error) throw error;
    return data;
  }

  async obtenerUsuario() {
    let { data: users, error } = await this.supabase.from('users').select('*');
    if (error) throw error;
    return users;
  }
}
//
