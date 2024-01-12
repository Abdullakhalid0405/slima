import { Button } from "./Button"

export const ButtonList = () => {

    const list = ["All", "Recommended","Gaming", "Cricket", "Live", "Music", "News","Pikachu","Cooking", "Entertainment", "Live", "Bollywood", "Comedy", "Tech" ,"All", "Recommended","Gaming", "Cricket", "Live","Cricket", "Live", "Music", "News","Pikachu","Cooking", "Entertainment", "Live", "Bollywood", "Comedy", "Tech" ,"All", "Recommended","Gaming", "Cricket", "Live"]
    return (
        <div className="flex ">
            {list.map((listItem, index) => {
              return  <Button name={listItem} key={index}/>
            })}

        </div>
    )
}