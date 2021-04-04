using System.Collections;
using System.Collections.Generic;
using System.Linq;
using UnityEngine;

public class PuzzleDone : MonoBehaviour
{
    public bool done = false;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (!done)
        {
            bool allChildrenDone = true;
            for (int i = 0; i < transform.childCount - 1; i++)
            {
                //get rid of get component, move it to array in start
                bool childDone = transform.GetChild(i).gameObject.GetComponent<PiecesScript>().inRightPosition;
                allChildrenDone = allChildrenDone && childDone;

                Debug.Log(allChildrenDone);
            }
            if (allChildrenDone)
            {
                done = true;
            }
        }
        if (done)
        {
            Debug.Log("Done!");
            transform.GetChild(transform.childCount - 1).gameObject.SetActive(true);
        }
        
    }
}
