import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import RecipeCard from '../components/RecipeCard/RecipeCard';
export default function Index(){
  return (
    <div>
      
    <Header title="TreinaCook - receitas" />

    <main>
      <RecipeCard 
      name="Bolo de Cenoura"
      picture="https://img.itdg.com.br/tdg/images/recipes/000/000/023/323619/323619_original.jpg?mode=crop&width=710&height=400"
      category="Bolos"
      link="/receitas/doces/bolo-de-cenoura"
      />
      <RecipeCard 
      name="Brigadeiro"
      picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
      category="Doce"
      link="/receitas/doces/brigadeiro"
      />
      <RecipeCard 
      name="Bolinho de chuva"
      picture="https://vovopalmirinha.com.br/wp-content/uploads/2020/03/vovo-palmirinha-bolinho-de-chuva.jpg"
      category="Lanches"
      link="/receitas/doces/bolinho-de-chuva"
      />
      <RecipeCard 
      name="Molho Branco"
      picture="https://img.itdg.com.br/tdg/images/recipes/000/044/199/320868/320868_original.jpg?mode=crop&width=710&height=400"
      category="Molhos"
      link="/receitas/doces/brigadeiro"
      />
      

      
    </main>


    <Footer />





    


    </div>
  )
}