import {supabase} from '@/app/lib/supabase';
import Counter from '@/app/components/Counter'; 

export default async function Home() {
  const { data } = await supabase.from('counter').select('count').single();
  const initialCount = data?.count || 0;

  return (
    <main>
      <Counter initialCount={initialCount}/>
    </main>
  );
}
