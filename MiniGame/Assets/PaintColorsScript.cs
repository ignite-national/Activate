using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PaintColorsScript : MonoBehaviour
{
    public bool Selected = false;
    public bool inRightPosition = false;
    private Vector3 RightPosition;
    public GameObject Paint;
    // Start is called before the first frame update
    void Start()
    {

    }

    // Update is called once per frame
    void Update()
    {
        if (Selected)
        {
            //transform.position = RightPosition;
            // inRightPosition = true;
            Color c = Color.white;
            if (name == "blue")
            {
                c = Color.blue;
            }
            else if (name == "gray")
            {
                c = Color.gray;
            }
            else if (name == "black")
            {
                c = Color.black;
            }
            else if (name == "green")
            {
                c = Color.green;
            }
            else if (name == "orange")
            {
                c = new Color(255, 165, 0);
            }
            else if (name == "purple")
            {
                c = new Color(128, 0, 128);
            }
            else if (name == "red")
            {
                c = Color.red;
            }
            else if (name == "yellow")
            {
                c = Color.yellow;
            }
            else if (name == "white")
            {
                c = Color.white;
            }
            Paint.GetComponent<ToolScript>().color1 = c;
        }
        if (!Selected)
        {
           // transform.position = RightPosition;
            transform.GetChild(0).gameObject.SetActive(false);
        }
        else
        {
            transform.GetChild(0).gameObject.SetActive(true);
        }
    }
}
