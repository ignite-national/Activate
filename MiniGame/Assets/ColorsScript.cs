using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ColorsScript : MonoBehaviour
{
    public bool Selected = false;
    public bool inRightPosition = false;
    private Vector3 RightPosition;
    public GameObject Plane;
    private Vector3 PlanePosition;
    // Start is called before the first frame update
    void Start()
    {
        PlanePosition = Plane.transform.position;
        RightPosition = transform.position;
       // transform.position = new Vector3(Random.Range(5, 13), Random.Range(3, -9));

    }

    // Update is called once per frame
    void Update()
    {
        if (Vector3.Distance(transform.position, PlanePosition) < 5f)
        {
            if (!Selected)
            {
                transform.position = RightPosition;
               // inRightPosition = true;
               if( name == "blue")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.blue;
                }
                else if (name == "gray")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.gray;
                }
                else if (name == "black")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.black;
                }
                else if (name == "green")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.green;
                }
                else if (name == "orange")
                {
                    Plane.GetComponent<Renderer>().material.color = new Color(255, 165, 0);
                }
                else if (name == "purple")
                {
                    Plane.GetComponent<Renderer>().material.color = new Color(128, 0, 128);
                }
                else if (name == "red")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.red;
                }
                else if (name == "yellow")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.yellow;
                }
                else if (name == "white")
                {
                    Plane.GetComponent<Renderer>().material.color = Color.white;
                }
            }
        }
        if (!Selected)
        {
            transform.position = RightPosition;
            transform.GetChild(0).gameObject.SetActive(false);
        }
        else
        {
          //  transform.GetChild(0).gameObject.SetActive(true);
        }
    }
}
