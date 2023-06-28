import ChannelCard from "./components/ChannelCard"
import CategoryCard from "./components/CategoryCard"

import {channels} from "./data/channels"
import {categories} from "./data/categories"

export default function App() {
  return (
    <>
      <main>
        <aside className='channelsContainer'>
          <h3>CHANNELS</h3>
          {channels.map((channel, index) =>
            <ChannelCard
              key={`channel-card-${index}`}
              name={channel.name}
              game={channel.game}
              views={channel.views}
              isOnline={channel.isOnline}
              photo={channel.photo}
            />
          )}
        </aside>
        <section className='categoriesSection'>
          <h3>CATEGORIES</h3>
          <div className='categoriesContainer'>
          {categories.map((category, index) =>
            <CategoryCard
              key={`category-card-${index}`}
              game={category.game}
              viewers={category.viewers}
              tags={category.tags}
              image={category.image}
              isNew={category.isNew}
            />
          )}
          </div>
        </section>
      </main>
    </>
  )
}


