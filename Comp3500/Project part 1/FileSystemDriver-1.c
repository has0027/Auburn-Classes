/*  Sam Gass, Henry Paek, Haden Stuart, Haoqian Li, Edward Ojo, Marvin Bell
    Operating Systems
    2/8/2020
    Project Part 1 - File System Driver */

#include <stdio.h>
#define ERR_BAD_ADDRESS -999

// String for the name of the memory file to be created/modified
char fileName[] = "simulated_memory.bin";
/*  An unsigned short is 2 bytes (a word) so 32768 ushorts is 64KB,
    the size of a sector. Now we can use sizeof(sector) to get 64KB.
    Its initalized to all zeros but the Erase methods make every bit a 1.   */
unsigned short sector[32768];

/*  If the file with name fileName does not exist, it creates a file with
    20 sectors, each sector with size 64KB for a total of 1.28MB with every bit being 1.
    If the file does exist, it replaces it with a file of all 1's   */
void EraseAllSectors()
{
    //  sets all bits in the sector array to 1. 0xFFFF is the max value of an ushort.
    for (int i = 0; i < 32768; i++)
    {
        sector[i] = 0xFFFF;
    }

    //  opens or creates the file with name driverFile in the mode for writing bits.
    FILE *driverFile = fopen(fileName, "wb");
    if (driverFile == NULL)
    {
        printf("Could not open driver file.\n");
        return;
    }

    //  For 20 sectors, writes 64KB of 1's to the file pointed to by driverFile
    for (int i = 0; i < 20; i++)
    {
        fwrite(&sector, sizeof(sector), 1, driverFile);
    }

    //  close file.
    fclose(driverFile);

    return;
}

/*  If the file with name driverFile does not exist, calls EraseAllSectors() to create a file.
    If the file does exist, it replaces all bits at sector nSectorNr  with 1's   */
void EraseSector(int nSectorNr)
{
    // opens the file at driverFile for reading and writing bits.
    FILE *driverFile = fopen(fileName, "rb+");
    // if the file does not exist, calls on EraseAllSectors() to create one.
    if (driverFile == NULL)
    {
        EraseAllSectors();
        return;
    }

    //  moves driverFile to sector to be erased
    int offset = nSectorNr * sizeof(sector);
    fseek(driverFile, offset, SEEK_SET);
    //  for the sector pointed to be driverFile, all bits are set to 1.
    fwrite(&sector, sizeof(sector), 1, driverFile);
    //  close file.
    fclose(driverFile);
}

unsigned short readWord(int nAddress)
{
    if (nAddress % 2 != 0)
    {
        return ERR_BAD_ADDRESS;
    }
    // Check if the file is over the boundary.
    if (nAddress >= 0 && nAddress < 1310720)
    {
        FILE *driverFile = fopen(fileName, "rb");
        //  make sure file opened, if not create it.
        if (driverFile == NULL)
        {
            EraseAllSectors();
        }
        // Check if the seek word is success.
        if (fseek(driverFile, nAddress, SEEK_SET) != 0)
        {
            fclose(driverFile);
            return -1;
        }
        unsigned short res = 0;
        // Get the word out.
        int flag = fread(&res, sizeof(res), 1, driverFile);
        if (flag < 1)
        {
            fclose(driverFile);
            return -1;
        }
        fclose(driverFile);
        return res;
    }
    else
    {
        return -1;
    }
}

int writeWord(int nAddress, unsigned short nWord)
{
    if (nAddress % 2 != 0)
    {
        return ERR_BAD_ADDRESS;
    }
    FILE *driverFile = fopen(fileName, "rb+");
    if (driverFile == NULL)
    {
        EraseAllSectors();
    }
    if (fseek(driverFile, nAddress, SEEK_SET) != 0)
    {
        fclose(driverFile);
        return -1;
    }
    int oldValue = readWord(nAddress);
    // nWord AND ReadWord
    unsigned short newValue = oldValue & nWord;
    int flag = fwrite(&newValue, sizeof(newValue), 1, driverFile);
    if (flag < 1)
    {
        fclose(driverFile);
        return -1;
    }
    fclose(driverFile);
    return 1;
}

int main(void)
{
    EraseAllSectors();
    writeWord(1310718, 11);
    int res = readWord(1310718);
    printf("The ans is %d.\n", res);
    EraseSector(19);
    res = readWord(1310718);
    printf("The ans is %d.\n", res);
    printf("done.\n");
    return 0;
};
