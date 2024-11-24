import { tailwindClasses } from './tailwind.classes.js';


const content_json = {
  "learning-path": [
    {
      "thumb": "./img/math-logo.png",
      "course": "mathematics",
      "topics": [
        {
          "title": "Algebra",
          "lessons": [
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            }
          ]
        },
        {
          "title": "Algebra linear",
          "lessons": [
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            }
          ]
        }
      ]
    },
    {
      "thumb": "./img/math-logo.png",
      "course": "data engineering",
      "topics": [
        {
          "title": "Algebra",
          "lessons": [
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            }
          ]
        },
        {
          "title": "Algebra linear",
          "lessons": [
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            },
            {
              "thumb": "./img/math-logo.png",
              "title": "Algebra",
              "description": "Algebra description",
              "notebook": "https://senhorafonso-notebook.notion.site/resum-o-ia-140386f466738068aeb9c3906b021966?pvs=4",
              "duration": "2h"
            }
          ]
        }
      ]
    }
  ]
}

function populateLearningPath(content_json) {
  const learningPath = window.document.getElementById('learning-path')

  content_json["learning-path"].forEach(contentItem => {
    const learningPathItem = document.createElement('div')
    const learningPathItemThumb = document.createElement('img')
    const learningPathItemCourse = document.createElement('h3')

    const learningPathThumbClasses = tailwindClasses['learningPathItemImg']
    learningPathThumbClasses.split(' ').forEach(className => learningPathItemThumb.classList.add(className))  

    const learningPathCourseClasses = tailwindClasses['learningPathItemCourse']
    learningPathCourseClasses.split(' ').forEach(className => learningPathItemCourse.classList.add(className))

    const learningPathItemClasses = tailwindClasses['learningPathItemDiv']
    learningPathItemClasses.split(' ').forEach(className => learningPathItem.classList.add(className))

    learningPathItemThumb.src = contentItem["thumb"]
    learningPathItemThumb.alt = contentItem["title"]
    learningPathItemCourse.textContent = contentItem["course"]

    learningPathItem.appendChild(learningPathItemThumb)
    learningPathItem.appendChild(learningPathItemCourse)

    learningPath.appendChild(learningPathItem)

  })

}


async function main() {
  populateLearningPath(content_json)
}

window.onload = function() {
  console.log('oi')
  main()
}