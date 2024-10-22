import { createClient } from '@supabase/supabase-js';
import { DataProvider, fetchUtils } from 'ra-core';

const supabaseUrl = 'https://mezqpbxhppuxtbekhyhb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lenFwYnhocHB1eHRiZWtoeWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1NjE2MjUsImV4cCI6MjA0NTEzNzYyNX0.B8FlyM_c8XqXzJT3kOsG2eHC4iF9LsjLWLBBsnv05vQ';

const supabase = createClient(supabaseUrl, supabaseKey);

export const dataProvider: DataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const { data, error, count } = await supabase
      .from(resource)
      .select('*', { count: 'exact' })
      .order(field, { ascending: order === 'ASC' })
      .range((page - 1) * perPage, page * perPage - 1);

    if (error) throw error;

    return {
      data: data || [],
      total: count || 0,
    };
  },

  getOne: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .select('*')
      .eq('id', params.id)
      .single();

    if (error) throw error;

    return { data: data || {} };
  },

  create: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .insert(params.data)
      .select()
      .single();

    if (error) throw error;

    return { data: data || {} };
  },

  update: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .update(params.data)
      .eq('id', params.id)
      .select()
      .single();

    if (error) throw error;

    return { data: data || {} };
  },

  delete: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .delete()
      .eq('id', params.id)
      .select()
      .single();

    if (error) throw error;

    return { data: data || {} };
  },

  deleteMany: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .delete()
      .in('id', params.ids)
      .select();

    if (error) throw error;

    return { data: data || [] };
  },

  getMany: async (resource, params) => {
    const { data, error } = await supabase
      .from(resource)
      .select('*')
      .in('id', params.ids);

    if (error) throw error;

    return { data: data || [] };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const { data, error, count } = await supabase
      .from(resource)
      .select('*', { count: 'exact' })
      .eq(params.target, params.id)
      .order(field, { ascending: order === 'ASC' })
      .range((page - 1) * perPage, page * perPage - 1);

    if (error) throw error;

    return {
      data: data || [],
      total: count || 0,
    };
  },
};
