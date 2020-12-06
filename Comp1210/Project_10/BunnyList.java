import java.util.Arrays;
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;
import java.text.DecimalFormat;
/**
* Creates a bunny list.
* 
* Project 10
* @author Haden Stuart
* @version 4/13/18
*/
public class BunnyList {

// Variables

   private String listName;
   private Bunny[] bunnyList;
   private String[] excludedRecords;

// Constructor

/**
* Set the list, name, and excludedrecords.
*
* 
*/
   public BunnyList() {
      listName = "not yet assigned";
      bunnyList = new Bunny[0];
      excludedRecords = new String[0];
   
   }

// Methods

/**
* Read the file.
*
* @param fileNameIn get file
* @throws FileNotFoundException exception for no file
*/
   public void readBunnyFile(String fileNameIn)
      throws FileNotFoundException {
   
      Scanner fileInput = new Scanner(new File(fileNameIn));
      listName = fileInput.nextLine();
   
      while (fileInput.hasNext()) {
      
         String line2 = fileInput.nextLine();
         Scanner bunnyScan = new Scanner(line2);
         bunnyScan.useDelimiter(",");
      
         String type = bunnyScan.next();
         char bType = type.charAt(0);
         char bunnyType = Character.toUpperCase(bType);
      
         switch (bunnyType) {
         
            case 'P':
               String name = bunnyScan.next();
               name = name.trim();
               String breed = bunnyScan.next();
               breed = breed.trim();
               double weight = Double.parseDouble(bunnyScan.next());
               
               PetBunny pb = new PetBunny(name, breed, weight);
               addBunny(pb);
               
               break;
               
            case 'H':
               name = bunnyScan.next();
               name = name.trim();
               breed = bunnyScan.next();
               breed = breed.trim();
               weight = Double.parseDouble(bunnyScan.next());
               double wearAndTear = Double.parseDouble(bunnyScan.next());
               
               HouseBunny hb = new HouseBunny(name,
                   breed, weight, wearAndTear);
               addBunny(hb);
               
               break;
               
            case 'J':
               name = bunnyScan.next();
               name = name.trim();
               breed = bunnyScan.next();
               breed = breed.trim();
               weight = Double.parseDouble(bunnyScan.next());
               double trainingCost = Double.parseDouble(bunnyScan.next());
               
               JumpingBunny jb = new JumpingBunny(name,
                   breed, weight, trainingCost);
               addBunny(jb);
               
               break;
               
            case 'S':
               name = bunnyScan.next();
               name = name.trim();
               breed = bunnyScan.next();
               breed = breed.trim();
               weight = Double.parseDouble(bunnyScan.next());
               double groomingCost = Double.parseDouble(bunnyScan.next());
               
               ShowBunny sb = new ShowBunny(name,
                   breed, weight, groomingCost);
               addBunny(sb);
               
               break;
               
            default:
               addExcludedRecord(line2);
         }
      }
   }

/**
* Get the listName.
*
* @return listName
*/   
   public String getListName() {
      return listName;
   }
 
/**
* Set the listName.
*
* @param listNameIn set the listName
*/  
   public void setListName(String listNameIn) {
      listName = listNameIn;
   }

/**
* Get the bunnyList.
*
* @return bunnyList
*/   
   public Bunny[] getBunnyList() {
      return bunnyList;
   }

/**
* Get the excludedRecords.
*
* @return excludedRecords
*/    
   public String[] getExcludedRecords() {
      return excludedRecords;
   }

/**
* Add a bunny to the bunnyList.
*
* @param bunnyIn get the bunny object
*/    
   public void addBunny(Bunny bunnyIn) {
      bunnyList = Arrays.copyOf(bunnyList, bunnyList.length + 1);
      bunnyList[bunnyList.length - 1] = bunnyIn;
   }

/**
* Add a record to the excluded records list.
*
* @param exRecordIn get the record
*/    
   public void addExcludedRecord(String exRecordIn) {
      excludedRecords = Arrays.copyOf(excludedRecords,
          excludedRecords.length + 1);
      excludedRecords[excludedRecords.length - 1] = exRecordIn;
   }

/**
* Set the toString.
*
* @return string
*/    
   public String toString() {
   
      String output = "\n";
   
      for (int i = 0; i < bunnyList.length; i++) {
         output = output + bunnyList[i].toString() + "\n";
      }
   
      return output;
   }

/**
* Get the total estimated monthly cost.
*
* @return totalEstimatedMonthlyCost
*/    
   public double totalEstimatedMonthlyCost() {
      
      double output = 0;
      int count = 0;
    
      for (count = 0; count < bunnyList.length; count++) {
         output = output + bunnyList[count].estimatedMonthlyCost();
      } 
   
      return output;
   }

/**
* Get the bunnyList summary.
*
* @return bunnyList summary
*/    
   public String summary() {
   
      DecimalFormat fmt = new DecimalFormat("##0.00");
      String output = "------------------------------\n";
      output += "Summary for Bunny Collection\n";
      output += "------------------------------\n";
      output += "Number of Bunnies: " + Bunny.bunnyCount + "\n";
      output += "Total Estimated Monthly Cost: $" 
         + fmt.format(totalEstimatedMonthlyCost()) + "\n\n";
   
      return output;
   }

/**
* Get the bunnyList sorted by name.
*
* @return name sorted bunnyList
*/    
   public String listByName() {
   
      Arrays.sort(bunnyList);
      String output = "------------------------------\n";
      output += "Bunnies by Name\n";
      output += "------------------------------\n\n";
      
      for (int i = 0; i < bunnyList.length; i++) {
         output = output + bunnyList[i].toString() + "\n\n";
      }
   
      return output;
   }
/**
* Get the bunnyList sorted by cost.
*
* @return cost sorted bunnyList
*/     
   public String listByCost() {
   
      Arrays.sort(bunnyList, new CostComparator());
      String output = "------------------------------\n";
      output += "Bunnies by Cost\n";
      output += "------------------------------\n\n";
      
      for (int i = 0; i < bunnyList.length; i++) {
         output = output + bunnyList[i].toString() + "\n\n";
      }
      
      return output;
   }

/**
* Get the excluded records.
*
* @return excludedRecordsList
*/     
   public String excludedRecordsList() {
   
      String output = "------------------------------\n";
      output += "Excluded Records\n";
      output += "------------------------------\n\n";
      
      for (int i = 0; i < excludedRecords.length; i++) {
         output = output + excludedRecords[i] + "\n\n";
      }
   
      return output;
   } 
}