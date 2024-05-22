#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

class spaceship {
    name: string;
    health: number;
    fuel: number;
    bodystrenght: number;
    constructor(
      name: string,
      health: number,
      fuel: number,
      bodystrenght: number,
    ) {
      this.name = name;
      this.health = health;
      this.fuel = fuel;
      this.bodystrenght = bodystrenght;
    }

    statOnLand(){
      this.fuel -= 50
      this.health -= 20
      this.bodystrenght -= 10 
    }
    showstatus() {
      console.log(chalk.blueBright(
        `\n\n***SHIP STATUS***
  Name: ${this.name}
  Health:${this.health}
  Fuel:${this.fuel}
  Body Strength:${this.bodystrenght}`
      ));
      console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
    }
    repairship(ans:number) {
        if(ans <= 0){
            console.log(chalk.red(`\nU Need To Found Some Resource To Repair The Ship\n`))
        }else{
            console.log(chalk.cyan.bold(`
      ***${this.name} IS Repaired Sucessful
Health: ${this.health = 100}
Fuel: ${this.fuel = 100}
Body Strenght: ${this.bodystrenght = 100}
`))

console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))

        }
    }
  }
  
  class player {
    name: string;
    spaceship: spaceship;
    resources: number
  
    constructor(name: string) {
      this.name = name;
      this.spaceship = new spaceship("CosmoJet", 100, 100, 100);
      this.resources = 0
      
    }
    
  }
  
  class Spaceadventuregame {
    player: player;
    currentplanet: string;
    constructor(playername: string) {
      this.player = new player(playername);
      this.currentplanet = "Earth";
    }
    
    private planetquestions (){
      inquirer.prompt([
        {
          name:"planet",type:"list",
          message: chalk.green("What Would You Like ToDo"),
          choices:["Explore","Ship Status","Repair Ship","Back To Earth","Quit"]
        }
    ]).then(ans => {
         if(ans.planet === "Explore"){

            let resource = this.player.resources += 1
            if(resource > 5 ){
                console.log(chalk.red(`\nResource Did NOT Found `))
                console.log(chalk.red('Pls Check Your Resources U cant Hold More Than 5\n'))
                console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
        
            }else if(resource <= 5){
            console.log(chalk.yellow(`\n✨Congratulation✨ ${this.player.name} ! U Found 1 Item`))
            console.log(chalk.yellow(`Your Resources: ${resource}\n`))
            console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
            }
            this.planetquestions()

        }else if(ans.planet === "Ship Status"){

            this.player.spaceship.showstatus()
            this.planetquestions()

        }else if(ans.planet === "Repair Ship"){
            this.player.resources
            if(this.player.resources < 2){

                console.log(chalk.red(`\nU need To Found Atleast 2 Resources For Repair The ship\n`));
                this.planetquestions()
                
            }else{
            this.player.spaceship.repairship(this.player.resources)
            this.player.resources -= 2
            this.planetquestions()
            }

        }else if(ans.planet === "Back To Earth"){

          let fuel = this.player.spaceship.fuel 
          if(fuel <= 0){
            console.log(chalk.red.bold(`U Dont Have Enough Fuel To Go Back To Earth \nPls Use your Resources To Refuel Ship By Using ${chalk.bold.bgCyan('Repair Ship')} Option`))
            this.planetquestions()
          }else{

            console.log(chalk.yellow(`\nSucessfull Land on Earth\n`))
            console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
            this.player.spaceship.statOnLand()
            this.displaylocation()
          }

        }else if(ans.planet === "Quit"){
          console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
          console.log(chalk.magenta(`\n\n🌈🌈_*_*_😊Thank You For Playing😊_*_*_🌈🌈`))
          console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
        }else{
          console.log('Error')
          console.log(ans)
        }
    })
       
    }    
    
    async displaylocation(){
      
      let input = await inquirer.prompt([{
        name:"locations",
        type:"list",
        message:chalk.green("Select a location"),
        choices:["🌑Moon","🌕Mars","🪐Jupiter","🛠️Repair Ship"]
      }])
  
      let location = input.locations
      if(location == "🌑Moon"){
        
        this.currentplanet = "Moon"
        let fuel = this.player.spaceship.fuel 
        if(fuel <= 0){
          console.log(`U Dont Have Enough Fuel To Go Back To Earth \nPls Use your Resources To Refuel Ship By Using ${chalk.bold.bgCyan('Repair Ship')} Option`)
          this.displaylocation()
        }else{
          console.log(chalk.yellow(`\nSuccesfully Landed On ${chalk.greenBright(this.currentplanet)} \nExplore to Found some Resoure`))
          console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
          this.player.spaceship.statOnLand()
        this.planetquestions()
          }

      }else if(location == "🌕Mars"){

        this.currentplanet = "Mars"
        let fuel = this.player.spaceship.fuel
        if(fuel <= 0){
          console.log(`U Dont Have Enough Fuel To Go Back To Earth \nPls Use your Resources To Refuel Ship By Using ${chalk.bold.bgCyan('Repair Ship')} Option`)
          this.displaylocation()
        }else{
          console.log(chalk.yellow(`\nSuccesfully Landed On ${chalk.greenBright(this.currentplanet)} \nExplore to Found some Resoure`))
          console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
          this.player.spaceship.statOnLand()
        this.planetquestions()
        }  

      }else if(location == "🪐Jupiter"){

        this.currentplanet = "Jupiter"
        let fuel = this.player.spaceship.fuel
        if(fuel <= 0){
          console.log(`\nU Dont Have Enough Fuel To Go Back To Earth \nPls Use your Resources To Refuel Ship By Using ${chalk.bold.bgCyan('Repair Ship')} Option\n\n`)
          this.displaylocation()
        }else{
          console.log(chalk.yellow(`\nSuccesfully Landed On ${chalk.greenBright(this.currentplanet)} \nExplore to Found some Resoure`))
          console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
          this.player.spaceship.statOnLand()
        this.planetquestions()
        }
      }else if(location === "🛠️Repair Ship"){
        this.player.spaceship.repairship(this.player.resources)
        this.displaylocation()
      }
    }
  
    startgame() {
      console.log(chalk.yellow(`Welcome 🎊${chalk.greenBright.bold(this.player.name)}🎊 To Space Exploration Adventure Game
      `));
      console.log(chalk.yellow(`🚀Space Ship: ${chalk.redBright.bold(this.player.spaceship.name)}`))
      console.log(chalk.greenBright.bold(`\n__________________________________________________________________`))
      this.displaylocation()
    }
  }
  let input = await inquirer.prompt([{
    name: "username",
    type:  "input",
    message: chalk.green("👨‍🚀Enter Your Name")
  }])
  let game = new Spaceadventuregame(input.username);
  console.log(chalk.yellowBright(`\nCurrent Location is 🌍Earth`))
  game.startgame();
  