using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DragAndDropColor : MonoBehaviour
{
    public GameObject SelectedColor;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

        if (Input.GetMouseButtonDown(0))
        {
            RaycastHit2D hit = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
            if (hit.transform != null && hit.transform.CompareTag("Color"))
            {
              //  if (!hit.transform.GetComponent<ColorsScript>().inRightPosition)
                //{

                    SelectedColor = hit.transform.gameObject;
                    SelectedColor.GetComponent<ColorsScript>().Selected = true;
                //}
            }
        }

        if (Input.GetMouseButtonUp(0) && SelectedColor != null)
        {
            SelectedColor.GetComponent<ColorsScript>().Selected = false;
            SelectedColor = null;
        }
        if (SelectedColor != null)
        {
            Vector3 MousePoint = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            SelectedColor.transform.position = new Vector3(MousePoint.x, MousePoint.y, 0);
        }

    }
}
