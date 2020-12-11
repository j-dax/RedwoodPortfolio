import { Link, routes } from '@redwoodjs/router'
import ProjectBriefCell from 'src/components/ProjectBriefCell/ProjectBriefCell'
import ProjectViewCell from 'src/components/ProjectViewCell/ProjectViewCell'
import ProjectCell from 'src/components/ProjectCell/ProjectCell'

const hatsuneMikeImg = "https://danbooru.donmai.us/data/__hatsune_miku_vocaloid_and_1_more_drawn_by_akino_coto__e130aa1d30bd813d30a05c025b62929d.png"

const AboutPage = () => {
  return (
    <>
      <h2>Dalton : [   ]</h2>
      <h3>Greatest Hits&#215C;</h3>
      <a href={hatsuneMikeImg}>
        Danbooru
      </a>
      <img height="200"
        src={hatsuneMikeImg}
      />
      <h4>maybe github and stuff. other stuff about cool physics stuff</h4>
      <p>Tempore libero error optio et commodi possimus quia id. Officia minima et earum. Voluptatem aut magni quo. Animi voluptate voluptas asperiores et minima et ea. Necessitatibus pariatur accusamus soluta non nemo nulla quis eveniet.</p>
    </>
  )
}

export default AboutPage
